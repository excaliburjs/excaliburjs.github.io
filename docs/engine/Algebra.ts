import { Engine } from './Engine';
import * as Util from './Util/Util';

/**
 * A 2D vector on a plane.
 */
export class Vector {
  /**
   * A (0, 0) vector
   */
  public static Zero = new Vector(0, 0);

  /**
   * A (1, 1) vector
   */
  public static One = new Vector(1, 1);

  /**
   * A (0.5, 0.5) vector
   */
  public static Half = new Vector(0.5, 0.5);

  /**
   * A unit vector pointing up (0, -1)
   */
  public static Up = new Vector(0, -1);

  /**
   * A unit vector pointing down (0, 1)
   */
  public static Down = new Vector(0, 1);

  /**
   * A unit vector pointing left (-1, 0)
   */
  public static Left = new Vector(-1, 0);
  /**
   * A unit vector pointing right (1, 0)
   */
  public static Right = new Vector(1, 0);

  /**
   * Returns a vector of unit length in the direction of the specified angle in Radians.
   * @param angle The angle to generate the vector
   */
  public static fromAngle(angle: number) {
    return new Vector(Math.cos(angle), Math.sin(angle));
  }

  /**
   * Checks if vector is not null, undefined, or if any of its components are NaN or Infinity.
   */
  public static isValid(vec: Vector) {
    if (vec === null || vec === undefined) {
      return false;
    }
    if (isNaN(vec.x) || isNaN(vec.y)) {
      return false;
    }

    if (vec.x === Infinity || vec.y === Infinity || vec.x === -Infinity || vec.y === -Infinity) {
      return false;
    }

    return true;
  }

  /**
   * Calculates distance between two Vectors
   * @param vec1
   * @param vec2
   */
  public static distance(vec1: Vector, vec2: Vector) {
    return Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
  }

  /**
   * @param x  X component of the Vector
   * @param y  Y component of the Vector
   */
  constructor(public x: number, public y: number) {}

  /**
   * Sets the x and y components at once
   */
  public setTo(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Compares this point against another and tests for equality
   * @param point  The other point to compare to
   */
  public equals(vector: Vector, tolerance: number = 0.001): boolean {
    return Math.abs(this.x - vector.x) <= tolerance && Math.abs(this.y - vector.y) <= tolerance;
  }

  /**
   * The distance to another vector. If no other Vector is specified, this will return the [[magnitude]].
   * @param v  The other vector. Leave blank to use origin vector.
   */
  public distance(v?: Vector): number {
    if (!v) {
      v = Vector.Zero;
    }
    return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
  }

  /**
   * The magnitude (size) of the Vector
   */
  public magnitude(): number {
    return this.distance();
  }

  /**
   * Normalizes a vector to have a magnitude of 1.
   */
  public normalize(): Vector {
    var d = this.distance();
    if (d > 0) {
      return new Vector(this.x / d, this.y / d);
    } else {
      return new Vector(0, 1);
    }
  }

  /**
   * Returns the average (midpoint) between the current point and the specified
   */
  public average(vec: Vector): Vector {
    return this.add(vec).scale(0.5);
  }

  /**
   * Scales a vector's by a factor of size
   * @param size  The factor to scale the magnitude by
   */
  public scale(size: number): Vector {
    return new Vector(this.x * size, this.y * size);
  }

  /**
   * Adds one vector to another
   * @param v The vector to add
   */
  public add(v: Vector): Vector {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  /**
   * Subtracts a vector from another, if you subract vector `B.sub(A)` the resulting vector points from A -> B
   * @param v The vector to subtract
   */
  public sub(v: Vector): Vector {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  /**
   * Adds one vector to this one modifying the original
   * @param v The vector to add
   */
  public addEqual(v: Vector): Vector {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /**
   * Subtracts a vector from this one modifying the original
   * @parallel v The vector to subtract
   */
  public subEqual(v: Vector): Vector {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /**
   * Scales this vector by a factor of size and modifies the original
   */
  public scaleEqual(size: number): Vector {
    this.x *= size;
    this.y *= size;
    return this;
  }

  /**
   * Performs a dot product with another vector
   * @param v  The vector to dot
   */
  public dot(v: Vector): number {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * Performs a 2D cross product with scalar. 2D cross products with a scalar return a vector.
   * @param v  The scalar to cross
   */
  public cross(v: number): Vector;
  /**
   * Performs a 2D cross product with another vector. 2D cross products return a scalar value not a vector.
   * @param v  The vector to cross
   */
  public cross(v: Vector): number;
  public cross(v: any): any {
    if (v instanceof Vector) {
      return this.x * v.y - this.y * v.x;
    } else if (typeof v === 'number') {
      return new Vector(v * this.y, -v * this.x);
    }
  }

  /**
   * Returns the perpendicular vector to this one
   */
  public perpendicular(): Vector {
    return new Vector(this.y, -this.x);
  }

  /**
   * Returns the normal vector to this one, same as the perpendicular of length 1
   */
  public normal(): Vector {
    return this.perpendicular().normalize();
  }

  /**
   * Negate the current vector
   */
  public negate(): Vector {
    return this.scale(-1);
  }

  /**
   * Returns the angle of this vector.
   */
  public toAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Rotates the current vector around a point by a certain number of
   * degrees in radians
   */
  public rotate(angle: number, anchor?: Vector): Vector {
    if (!anchor) {
      anchor = new Vector(0, 0);
    }
    var sinAngle = Math.sin(angle);
    var cosAngle = Math.cos(angle);
    var x = cosAngle * (this.x - anchor.x) - sinAngle * (this.y - anchor.y) + anchor.x;
    var y = sinAngle * (this.x - anchor.x) + cosAngle * (this.y - anchor.y) + anchor.y;
    return new Vector(x, y);
  }

  /**
   * Creates new vector that has the same values as the previous.
   */
  public clone(): Vector {
    return new Vector(this.x, this.y);
  }

  /**
   * Returns a string repesentation of the vector.
   */
  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

/**
 * A 2D ray that can be cast into the scene to do collision detection
 */
export class Ray {
  public pos: Vector;
  public dir: Vector;

  /**
   * @param pos The starting position for the ray
   * @param dir The vector indicating the direction of the ray
   */
  constructor(pos: Vector, dir: Vector) {
    this.pos = pos;
    this.dir = dir.normalize();
  }

  /**
   * Tests a whether this ray intersects with a line segment. Returns a number greater than or equal to 0 on success.
   * This number indicates the mathematical intersection time.
   * @param line  The line to test
   */
  public intersect(line: Line): number {
    var numerator = line.begin.sub(this.pos);

    // Test is line and ray are parallel and non intersecting
    if (this.dir.cross(line.getSlope()) === 0 && numerator.cross(this.dir) !== 0) {
      return -1;
    }

    // Lines are parallel
    var divisor = this.dir.cross(line.getSlope());
    if (divisor === 0) {
      return -1;
    }

    var t = numerator.cross(line.getSlope()) / divisor;

    if (t >= 0) {
      var u = numerator.cross(this.dir) / divisor / line.getLength();
      if (u >= 0 && u <= 1) {
        return t;
      }
    }
    return -1;
  }

  /**
   * Returns the point of intersection given the intersection time
   */
  public getPoint(time: number): Vector {
    return this.pos.add(this.dir.scale(time));
  }
}

/**
 * A 2D line segment
 */
export class Line {
  /**
   * @param begin  The starting point of the line segment
   * @param end  The ending point of the line segment
   */
  constructor(public begin: Vector, public end: Vector) {}

  /**
   * Gets the raw slope (m) of the line. Will return (+/-)Infinity for vertical lines.
   */
  public get slope() {
    return (this.end.y - this.begin.y) / (this.end.x - this.begin.x);
  }

  /**
   * Gets the Y-intercept (b) of the line. Will return (+/-)Infinity if there is no intercept.
   */
  public get intercept() {
    return this.begin.y - this.slope * this.begin.x;
  }

  /**
   * Gets the normal of the line
   */
  public normal(): Vector {
    return this.end.sub(this.begin).normal();
  }

  /**
   * Returns the slope of the line in the form of a vector
   */
  public getSlope(): Vector {
    var begin = this.begin;
    var end = this.end;
    var distance = begin.distance(end);
    return end.sub(begin).scale(1 / distance);
  }

  /**
   * Returns the length of the line segment in pixels
   */
  public getLength(): number {
    var begin = this.begin;
    var end = this.end;
    var distance = begin.distance(end);
    return distance;
  }

  /**
   * Find the perpendicular distance from the line to a point
   * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
   * @param point
   */
  public distanceToPoint(point: Vector) {
    let x0 = point.x;
    let y0 = point.y;

    let l = this.getLength();

    let dy = this.end.y - this.begin.y;
    let dx = this.end.x - this.begin.x;
    let distance = Math.abs(dy * x0 - dx * y0 + this.end.x * this.begin.y - this.end.y * this.begin.x) / l;
    return distance;
  }

  /**
   * Finds a point on the line given only an X or a Y value. Given an X value, the function returns
   * a new point with the calculated Y value and vice-versa.
   *
   * @param x The known X value of the target point
   * @param y The known Y value of the target point
   * @returns A new point with the other calculated axis value
   */
  public findPoint(x: number = null, y: number = null): Vector {
    var m = this.slope;
    var b = this.intercept;

    if (x !== null) {
      return new Vector(x, m * x + b);
    } else if (y !== null) {
      return new Vector((y - b) / m, y);
    } else {
      throw new Error('You must provide an X or a Y value');
    }
  }

  /**
   * Whether or not the given point lies on this line. This method is precise by default
   * meaning the point must lie exactly on the line. Adjust threshold to
   * loosen the strictness of the check for floating-point calculations.
   */
  public hasPoint(x: number, y: number, threshold?: number): boolean;

  /**
   * Whether or not the given point lies on this line. This method is precise by default
   * meaning the point must lie exactly on the line. Adjust threshold to
   * loosen the strictness of the check for floating-point calculations.
   */
  public hasPoint(v: Vector, threshold?: number): boolean;

  /**
   * @see http://stackoverflow.com/a/11908158/109458
   */
  public hasPoint(): boolean {
    var currPoint: Vector;
    var threshold = 0;

    if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
      currPoint = new Vector(arguments[0], arguments[1]);
      threshold = arguments[2] || 0;
    } else if (arguments[0] instanceof Vector) {
      currPoint = arguments[0];
      threshold = arguments[1] || 0;
    } else {
      throw 'Could not determine the arguments for Vector.hasPoint';
    }

    var dxc = currPoint.x - this.begin.x;
    var dyc = currPoint.y - this.begin.y;

    var dx1 = this.end.x - this.begin.x;
    var dy1 = this.end.y - this.begin.y;

    var cross = dxc * dy1 - dyc * dx1;

    // check whether point lines on the line
    if (Math.abs(cross) > threshold) {
      return false;
    }

    // check whether point lies in-between start and end
    if (Math.abs(dx1) >= Math.abs(dy1)) {
      return dx1 > 0 ? this.begin.x <= currPoint.x && currPoint.x <= this.end.x : this.end.x <= currPoint.x && currPoint.x <= this.begin.x;
    } else {
      return dy1 > 0 ? this.begin.y <= currPoint.y && currPoint.y <= this.end.y : this.end.y <= currPoint.y && currPoint.y <= this.begin.y;
    }
  }
}

/**
 * A 1 dimensional projection on an axis, used to test overlaps
 */
export class Projection {
  constructor(public min: number, public max: number) {}
  public overlaps(projection: Projection): boolean {
    return this.max > projection.min && projection.max > this.min;
  }

  public getOverlap(projection: Projection): number {
    if (this.overlaps(projection)) {
      if (this.max > projection.max) {
        return projection.max - this.min;
      } else {
        return this.max - projection.min;
      }
    }
    return 0;
  }
}

export class GlobalCoordinates {
  public static fromPagePosition(x: number, y: number, engine: Engine): GlobalCoordinates;
  public static fromPagePosition(pos: Vector, engine: Engine): GlobalCoordinates;
  public static fromPagePosition(xOrPos: number | Vector, yOrEngine: number | Engine, engineOrUndefined?: Engine): GlobalCoordinates {
    var pageX: number;
    var pageY: number;
    var pagePos: Vector;
    var engine: Engine;

    if (arguments.length === 3) {
      pageX = <number>xOrPos;
      pageY = <number>yOrEngine;
      pagePos = new Vector(pageX, pageY);
      engine = engineOrUndefined;
    } else {
      pagePos = <Vector>xOrPos;
      pageX = pagePos.x;
      pageY = pagePos.y;
      engine = <Engine>yOrEngine;
    }

    var screenX: number = pageX - Util.getPosition(engine.canvas).x;
    var screenY: number = pageY - Util.getPosition(engine.canvas).y;
    var screenPos = new Vector(screenX, screenY);
    var worldPos = engine.screenToWorldCoordinates(screenPos);

    return new GlobalCoordinates(worldPos, pagePos, screenPos);
  }

  constructor(public worldPos: Vector, public pagePos: Vector, public screenPos: Vector) {}
}
