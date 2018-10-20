import { ICollisionArea } from './ICollisionArea';
import { Body } from './Body';

import { Actor, CollisionType } from '../Actor';
import { Vector } from '../Algebra';
import { Physics, CollisionResolutionStrategy } from '../Physics';
import { PostCollisionEvent, PreCollisionEvent } from '../Events';
import * as Util from '../Util/Util';

/**
 * Collision contacts are used internally by Excalibur to resolve collision between actors. This
 * Pair prevents collisions from being evaluated more than one time
 */
export class CollisionContact {
  /**
   * The id of this collision contact
   */
  id: string;
  /**
   * The first rigid body in the collision
   */
  bodyA: ICollisionArea;
  /**
   * The second rigid body in the collision
   */
  bodyB: ICollisionArea;
  /**
   * The minimum translation vector to resolve penetration, pointing away from bodyA
   */
  mtv: Vector;
  /**
   * The point of collision shared between bodyA and bodyB
   */
  point: Vector;
  /**
   * The collision normal, pointing away from bodyA
   */
  normal: Vector;

  constructor(bodyA: ICollisionArea, bodyB: ICollisionArea, mtv: Vector, point: Vector, normal: Vector) {
    this.bodyA = bodyA;
    this.bodyB = bodyB;
    this.mtv = mtv;
    this.point = point;
    this.normal = normal;
  }

  resolve(strategy: CollisionResolutionStrategy) {
    if (strategy === CollisionResolutionStrategy.RigidBody) {
      this._resolveRigidBodyCollision();
    } else if (strategy === CollisionResolutionStrategy.Box) {
      this._resolveBoxCollision();
    } else {
      throw new Error('Unknown collision resolution strategy');
    }
  }

  private _applyBoxImpulse(bodyA: Actor, bodyB: Actor, mtv: Vector) {
    if (bodyA.collisionType === CollisionType.Active && bodyB.collisionType !== CollisionType.Passive) {
      // Resolve overlaps
      if (bodyA.collisionType === CollisionType.Active && bodyB.collisionType === CollisionType.Active) {
        // split overlaps if both are Active
        mtv = mtv.scale(0.5);
      }
      // Apply mtv
      bodyA.pos.y += mtv.y;
      bodyA.pos.x += mtv.x;

      let mtvDir = mtv.normalize();

      // only adjust if velocity is opposite
      if (mtvDir.dot(bodyA.vel) < 0) {
        // Cancel out velocity in direction of mtv
        let velAdj = mtvDir.scale(mtvDir.dot(bodyA.vel.negate()));

        bodyA.vel = bodyA.vel.add(velAdj);
      }

      bodyA.emit('postcollision', new PostCollisionEvent(bodyA, bodyB, Util.getSideFromVector(mtv), mtv));
    }
  }

  private _resolveBoxCollision() {
    var bodyA = this.bodyA.body.actor;
    var bodyB = this.bodyB.body.actor;
    var side = Util.getSideFromVector(this.mtv);
    var mtv = this.mtv.negate();
    // Publish collision events on both participants
    bodyA.emit('precollision', new PreCollisionEvent(bodyA, bodyB, side, mtv));
    bodyB.emit('precollision', new PreCollisionEvent(bodyB, bodyA, Util.getOppositeSide(side), mtv.negate()));

    this._applyBoxImpulse(bodyA, bodyB, mtv);
    this._applyBoxImpulse(bodyB, bodyA, mtv.negate());
  }

  private _resolveRigidBodyCollision() {
    // perform collison on bounding areas
    var bodyA: Body = this.bodyA.body;
    var bodyB: Body = this.bodyB.body;
    var mtv = this.mtv; // normal pointing away from bodyA
    var normal = this.normal; // normal pointing away from bodyA
    if (bodyA.actor === bodyB.actor) {
      // sanity check for existing pairs
      return;
    }

    // Publish collision events on both participants
    var side = Util.getSideFromVector(this.mtv);
    bodyA.actor.emit('precollision', new PreCollisionEvent(this.bodyA.body.actor, this.bodyB.body.actor, side, this.mtv));
    bodyB.actor.emit(
      'precollision',
      new PreCollisionEvent(this.bodyB.body.actor, this.bodyA.body.actor, Util.getOppositeSide(side), this.mtv.negate())
    );

    // If any of the participants are passive then short circuit
    if (bodyA.actor.collisionType === CollisionType.Passive || bodyB.actor.collisionType === CollisionType.Passive) {
      return;
    }

    var invMassA = bodyA.actor.collisionType === CollisionType.Fixed ? 0 : 1 / bodyA.mass;
    var invMassB = bodyB.actor.collisionType === CollisionType.Fixed ? 0 : 1 / bodyB.mass;

    var invMoiA = bodyA.actor.collisionType === CollisionType.Fixed ? 0 : 1 / bodyA.moi;
    var invMoiB = bodyB.actor.collisionType === CollisionType.Fixed ? 0 : 1 / bodyB.moi;

    // average restitution more relistic
    var coefRestitution = Math.min(bodyA.restitution, bodyB.restitution);

    var coefFriction = Math.min(bodyA.friction, bodyB.friction);

    normal = normal.normalize();
    var tangent = normal.normal().normalize();

    var ra = this.point.sub(this.bodyA.getCenter()); // point relative to bodyA position
    var rb = this.point.sub(this.bodyB.getCenter()); /// point relative to bodyB

    // Relative velocity in linear terms
    // Angular to linear velocity formula -> omega = v/r
    var rv = bodyB.vel.add(rb.cross(-bodyB.rx)).sub(bodyA.vel.sub(ra.cross(bodyA.rx)));
    var rvNormal = rv.dot(normal);
    var rvTangent = rv.dot(tangent);

    var raTangent = ra.dot(tangent);
    var raNormal = ra.dot(normal);

    var rbTangent = rb.dot(tangent);
    var rbNormal = rb.dot(normal);

    // If objects are moving away ignore
    if (rvNormal > 0) {
      return;
    }

    // Collision impulse formula from Chris Hecker
    // https://en.wikipedia.org/wiki/Collision_response
    var impulse =
      -((1 + coefRestitution) * rvNormal) / (invMassA + invMassB + invMoiA * raTangent * raTangent + invMoiB * rbTangent * rbTangent);

    if (bodyA.actor.collisionType === CollisionType.Fixed) {
      bodyB.vel = bodyB.vel.add(normal.scale(impulse * invMassB));
      if (Physics.allowRigidBodyRotation) {
        bodyB.rx -= impulse * invMoiB * -rb.cross(normal);
      }
      bodyB.addMtv(mtv);
    } else if (bodyB.actor.collisionType === CollisionType.Fixed) {
      bodyA.vel = bodyA.vel.sub(normal.scale(impulse * invMassA));
      if (Physics.allowRigidBodyRotation) {
        bodyA.rx += impulse * invMoiA * -ra.cross(normal);
      }
      bodyA.addMtv(mtv.negate());
    } else {
      bodyB.vel = bodyB.vel.add(normal.scale(impulse * invMassB));
      bodyA.vel = bodyA.vel.sub(normal.scale(impulse * invMassA));

      if (Physics.allowRigidBodyRotation) {
        bodyB.rx -= impulse * invMoiB * -rb.cross(normal);
        bodyA.rx += impulse * invMoiA * -ra.cross(normal);
      }

      // Split the mtv in half for the two bodies, potentially we could do something smarter here
      bodyB.addMtv(mtv.scale(0.5));
      bodyA.addMtv(mtv.scale(-0.5));
    }

    // Friction portion of impulse
    if (coefFriction && rvTangent) {
      // Columb model of friction, formula for impulse due to friction from
      // https://en.wikipedia.org/wiki/Collision_response

      // tangent force exerted by body on another in contact
      var t = rv.sub(normal.scale(rv.dot(normal))).normalize();

      // impulse in the direction of tangent force
      var jt = rv.dot(t) / (invMassA + invMassB + raNormal * raNormal * invMoiA + rbNormal * rbNormal * invMoiB);

      var frictionImpulse = new Vector(0, 0);
      if (Math.abs(jt) <= impulse * coefFriction) {
        frictionImpulse = t.scale(jt).negate();
      } else {
        frictionImpulse = t.scale(-impulse * coefFriction);
      }

      if (bodyA.actor.collisionType === CollisionType.Fixed) {
        // apply frictional impulse
        bodyB.vel = bodyB.vel.add(frictionImpulse.scale(invMassB));
        if (Physics.allowRigidBodyRotation) {
          bodyB.rx += frictionImpulse.dot(t) * invMoiB * rb.cross(t);
        }
      } else if (bodyB.actor.collisionType === CollisionType.Fixed) {
        // apply frictional impulse
        bodyA.vel = bodyA.vel.sub(frictionImpulse.scale(invMassA));
        if (Physics.allowRigidBodyRotation) {
          bodyA.rx -= frictionImpulse.dot(t) * invMoiA * ra.cross(t);
        }
      } else {
        // apply frictional impulse
        bodyB.vel = bodyB.vel.add(frictionImpulse.scale(invMassB));
        bodyA.vel = bodyA.vel.sub(frictionImpulse.scale(invMassA));

        // apply frictional impulse
        if (Physics.allowRigidBodyRotation) {
          bodyB.rx += frictionImpulse.dot(t) * invMoiB * rb.cross(t);
          bodyA.rx -= frictionImpulse.dot(t) * invMoiA * ra.cross(t);
        }
      }
    }

    bodyA.actor.emit('postcollision', new PostCollisionEvent(this.bodyA.body.actor, this.bodyB.body.actor, side, this.mtv));
    bodyB.actor.emit(
      'postcollision',
      new PostCollisionEvent(this.bodyB.body.actor, this.bodyA.body.actor, Util.getOppositeSide(side), this.mtv.negate())
    );
  }
}
