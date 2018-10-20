import { Physics } from './../Physics';
import { Color } from './../Drawing/Color';
import { Body } from './Body';
import { CollisionContact } from './CollisionContact';
import { CollisionType, Actor } from '../Actor';
import { CollisionResolutionStrategy } from '../Physics';
import * as DrawUtil from '../Util/DrawUtil';

/**
 * Models a potential collision between 2 bodies
 */
export class Pair {
  public id: string = null;
  public collision: CollisionContact = null;

  constructor(public bodyA: Body, public bodyB: Body) {
    this.id = Pair.calculatePairHash(bodyA, bodyB);
  }

  public static canCollide(actorA: Actor, actorB: Actor) {
    // if both are fixed short circuit
    if (actorA.collisionType === CollisionType.Fixed && actorB.collisionType === CollisionType.Fixed) {
      return false;
    }

    // if the either is prevent collision short circuit
    if (actorB.collisionType === CollisionType.PreventCollision || actorA.collisionType === CollisionType.PreventCollision) {
      return false;
    }

    // if either is dead short circuit
    if (actorA.isKilled() || actorB.isKilled()) {
      return false;
    }

    return true;
  }

  /**
   * Returns whether or not it is possible for the pairs to collide
   */
  public get canCollide(): boolean {
    let actorA = this.bodyA.actor;
    let actorB = this.bodyB.actor;
    return Pair.canCollide(actorA, actorB);
  }

  /**
   * Runs the collison intersection logic on the members of this pair
   */
  public collide() {
    this.collision = this.bodyA.collisionArea.collide(this.bodyB.collisionArea);
  }

  /**
   * Resovles the collision body position and velocity if a collision occured
   */
  public resolve(strategy: CollisionResolutionStrategy) {
    if (this.collision) {
      this.collision.resolve(strategy);
    }
  }

  /**
   * Calculates the unique pair hash id for this collision pair
   */
  public static calculatePairHash(bodyA: Body, bodyB: Body): string {
    if (bodyA.actor.id < bodyB.actor.id) {
      return `#${bodyA.actor.id}+${bodyB.actor.id}`;
    } else {
      return `#${bodyB.actor.id}+${bodyA.actor.id}`;
    }
  }

  /* istanbul ignore next */
  public debugDraw(ctx: CanvasRenderingContext2D) {
    if (this.collision) {
      if (Physics.showContacts) {
        DrawUtil.point(ctx, Color.Red, this.collision.point);
      }
      if (Physics.showCollisionNormals) {
        DrawUtil.vector(ctx, Color.Cyan, this.collision.point, this.collision.normal, 30);
      }
    }
  }
}
