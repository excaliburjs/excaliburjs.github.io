/// <reference path="Mocks.ts" />

describe('A DynamicTree Broadphase', () => {
  var actorA: ex.Actor;
  var actorB: ex.Actor;
  var actorC: ex.Actor;

  beforeEach(() => {
    actorA = new ex.Actor(0, 0, 20, 20);
    actorA.collisionType = ex.CollisionType.Active;
    actorA.collisionArea = new ex.CircleArea({
      radius: 10,
      body: actorA.body
    });

    actorB = new ex.Actor(20, 0, 20, 20);
    actorB.collisionType = ex.CollisionType.Active;

    actorB.collisionArea = new ex.CircleArea({
      radius: 10,
      body: actorB.body
    });

    actorC = new ex.Actor(1000, 0, 20, 20);
    actorC.collisionType = ex.CollisionType.Active;

    actorC.collisionArea = new ex.CircleArea({
      radius: 10,
      body: actorC.body
    });
  });

  it('exists', () => {
    expect(ex.DynamicTreeCollisionBroadphase).toBeDefined();
  });

  it('can be constructed', () => {
    var dt = new ex.DynamicTreeCollisionBroadphase();

    expect(dt).not.toBe(null);
  });

  it('can find collision pairs for actors that are potentially colliding', () => {
    var dt = new ex.DynamicTreeCollisionBroadphase();
    dt.track(actorA.body);
    dt.track(actorB.body);
    dt.track(actorC.body);

    // only should be 1 pair since C is very far away
    var pairs = dt.broadphase([actorA, actorB, actorC], 100);

    expect(pairs.length).toBe(1);
  });
});
