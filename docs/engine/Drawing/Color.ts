/**
 * Provides standard colors (e.g. [[Color.Black]])
 * but you can also create custom colors using RGB, HSL, or Hex. Also provides
 * useful color operations like [[Color.lighten]], [[Color.darken]], and more.
 *
 * [[include:Colors.md]]
 */
export class Color {
  /**
   * Red channel
   */
  public r: number;
  /**
   * Green channel
   */
  public g: number;
  /**
   * Blue channel
   */
  public b: number;
  /**
   * Alpha channel (between 0 and 1)
   */
  public a: number;

  /**
   * Hue
   */
  public h: number;
  /**
   * Saturation
   */
  public s: number;
  /**
   * Lightness
   */
  public l: number;

  /**
   * Creates a new instance of Color from an r, g, b, a
   *
   * @param r  The red component of color (0-255)
   * @param g  The green component of color (0-255)
   * @param b  The blue component of color (0-255)
   * @param a  The alpha component of color (0-1.0)
   */
  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a != null ? a : 1;
  }

  /**
   * Creates a new instance of Color from an r, g, b, a
   *
   * @param r  The red component of color (0-255)
   * @param g  The green component of color (0-255)
   * @param b  The blue component of color (0-255)
   * @param a  The alpha component of color (0-1.0)
   */
  public static fromRGB(r: number, g: number, b: number, a?: number): Color {
    return new Color(r, g, b, a);
  }

  /**
   * Creates a new inscance of Color from a hex string
   *
   * @param hex  CSS color string of the form #ffffff, the alpha component is optional
   */
  public static fromHex(hex: string): Color {
    var hexRegEx: RegExp = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
    var match = null;
    if ((match = hex.match(hexRegEx))) {
      var r = parseInt(match[1], 16);
      var g = parseInt(match[2], 16);
      var b = parseInt(match[3], 16);
      var a = 1;
      if (match[4]) {
        a = parseInt(match[4], 16) / 255;
      }
      return new Color(r, g, b, a);
    } else {
      throw new Error('Invalid hex string: ' + hex);
    }
  }

  /**
   * Creats a new instance of Color from hsla values
   *
   * @param h  Hue is represented [0-1]
   * @param s  Saturation is represented [0-1]
   * @param l  Luminance is represented [0-1]
   * @param a  Alpha is represented [0-1]
   */
  public static fromHSL(h: number, s: number, l: number, a: number = 1.0): Color {
    var temp = new HSLColor(h, s, l, a);
    return temp.toRGBA();
  }

  /**
   * Lightens the current color by a specified amount
   *
   * @param factor  The amount to lighten by [0-1]
   */
  public lighten(factor: number = 0.1): Color {
    var temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
    temp.l += temp.l * factor;
    return temp.toRGBA();
  }

  /**
   * Darkens the current color by a specified amount
   *
   * @param factor  The amount to darken by [0-1]
   */
  public darken(factor: number = 0.1): Color {
    var temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
    temp.l -= temp.l * factor;
    return temp.toRGBA();
  }

  /**
   * Saturates the current color by a specified amount
   *
   * @param factor  The amount to saturate by [0-1]
   */
  public saturate(factor: number = 0.1): Color {
    var temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
    temp.s += temp.s * factor;
    return temp.toRGBA();
  }

  /**
   * Desaturates the current color by a specified amount
   *
   * @param factor  The amount to desaturate by [0-1]
   */
  public desaturate(factor: number = 0.1): Color {
    var temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
    temp.s -= temp.s * factor;
    return temp.toRGBA();
  }

  /**
   * Multiplies a color by another, results in a darker color
   *
   * @param color  The other color
   */
  public mulitiply(color: Color): Color {
    var newR = (((color.r / 255) * this.r) / 255) * 255;
    var newG = (((color.g / 255) * this.g) / 255) * 255;
    var newB = (((color.b / 255) * this.b) / 255) * 255;
    var newA = color.a * this.a;
    return new Color(newR, newG, newB, newA);
  }

  /**
   * Screens a color by another, results in a lighter color
   *
   * @param color  The other color
   */
  public screen(color: Color): Color {
    var color1 = color.invert();
    var color2 = color.invert();
    return color1.mulitiply(color2).invert();
  }

  /**
   * Inverts the current color
   */
  public invert(): Color {
    return new Color(255 - this.r, 255 - this.g, 255 - this.b, 1.0 - this.a);
  }

  /**
   * Averages the current color with another
   *
   * @param color  The other color
   */
  public average(color: Color): Color {
    var newR = (color.r + this.r) / 2;
    var newG = (color.g + this.g) / 2;
    var newB = (color.b + this.b) / 2;
    var newA = (color.a + this.a) / 2;
    return new Color(newR, newG, newB, newA);
  }

  /**
   * Returns a CSS string representation of a color.
   *
   * @param format Color representation, accepts: rgb, hsl, or hex
   */
  public toString(format: 'rgb' | 'hsl' | 'hex' = 'rgb') {
    switch (format) {
      case 'rgb':
        return this.toRGBA();
      case 'hsl':
        return this.toHSLA();
      case 'hex':
        return this.toHex();
      default:
        throw new Error('Invalid Color format');
    }
  }

  /**
   * Returns Hex Value of a color component
   * @param c color component
   * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   */
  private _componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  /**
   * Return Hex representation of a color.
   */
  public toHex() {
    return '#' + this._componentToHex(this.r) + this._componentToHex(this.g) + this._componentToHex(this.b);
  }

  /**
   * Return RGBA representation of a color.
   */
  public toRGBA() {
    var result = String(this.r.toFixed(0)) + ', ' + String(this.g.toFixed(0)) + ', ' + String(this.b.toFixed(0));
    if (this.a !== undefined || this.a !== null) {
      return 'rgba(' + result + ', ' + String(this.a) + ')';
    }
    return 'rgb(' + result + ')';
  }

  /**
   * Return HSLA representation of a color.
   */
  public toHSLA() {
    return HSLColor.fromRGBA(this.r, this.g, this.b, this.a).toString();
  }

  /**
   * Returns a CSS string representation of a color.
   */
  public fillStyle() {
    return this.toString();
  }

  /**
   * Returns a clone of the current color.
   */
  public clone(): Color {
    return new Color(this.r, this.g, this.b, this.a);
  }

  /**
   * Black (#000000)
   */
  public static Black: Color = Color.fromHex('#000000');

  /**
   * White (#FFFFFF)
   */
  public static White: Color = Color.fromHex('#FFFFFF');

  /**
   * Gray (#808080)
   */
  public static Gray: Color = Color.fromHex('#808080');

  /**
   * Light gray (#D3D3D3)
   */
  public static LightGray: Color = Color.fromHex('#D3D3D3');

  /**
   * Dark gray (#A9A9A9)
   */
  public static DarkGray: Color = Color.fromHex('#A9A9A9');

  /**
   * Yellow (#FFFF00)
   */
  public static Yellow: Color = Color.fromHex('#FFFF00');

  /**
   * Orange (#FFA500)
   */
  public static Orange: Color = Color.fromHex('#FFA500');

  /**
   * Red (#FF0000)
   */
  public static Red: Color = Color.fromHex('#FF0000');

  /**
   * Vermillion (#FF5B31)
   */
  public static Vermillion: Color = Color.fromHex('#FF5B31');

  /**
   * Rose (#FF007F)
   */
  public static Rose: Color = Color.fromHex('#FF007F');

  /**
   * Magenta (#FF00FF)
   */
  public static Magenta: Color = Color.fromHex('#FF00FF');

  /**
   * Violet (#7F00FF)
   */
  public static Violet: Color = Color.fromHex('#7F00FF');

  /**
   * Blue (#0000FF)
   */
  public static Blue: Color = Color.fromHex('#0000FF');

  /**
   * Azure (#007FFF)
   */
  public static Azure: Color = Color.fromHex('#007FFF');

  /**
   * Cyan (#00FFFF)
   */
  public static Cyan: Color = Color.fromHex('#00FFFF');

  /**
   * Viridian (#59978F)
   */
  public static Viridian: Color = Color.fromHex('#59978F');

  /**
   * Green (#00FF00)
   */
  public static Green: Color = Color.fromHex('#00FF00');

  /**
   * Chartreuse (#7FFF00)
   */
  public static Chartreuse: Color = Color.fromHex('#7FFF00');

  /**
   * Transparent (#FFFFFF00)
   */
  public static Transparent: Color = Color.fromHex('#FFFFFF00');
}

/**
 * Internal HSL Color representation
 *
 * http://en.wikipedia.org/wiki/HSL_and_HSV
 * http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */
class HSLColor {
  constructor(public h: number, public s: number, public l: number, public a: number) {}

  public static hue2rgb(p: number, q: number, t: number): number {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }

  public static fromRGBA(r: number, g: number, b: number, a: number): HSLColor {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return new HSLColor(h, s, l, a);
  }

  public toRGBA(): Color {
    var r: number, g: number, b: number;

    if (this.s === 0) {
      r = g = b = this.l; // achromatic
    } else {
      var q = this.l < 0.5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s;
      var p = 2 * this.l - q;
      r = HSLColor.hue2rgb(p, q, this.h + 1 / 3);
      g = HSLColor.hue2rgb(p, q, this.h);
      b = HSLColor.hue2rgb(p, q, this.h - 1 / 3);
    }

    return new Color(r * 255, g * 255, b * 255, this.a);
  }

  public toString(): string {
    let h = this.h.toFixed(0),
      s = this.s.toFixed(0),
      l = this.l.toFixed(0),
      a = this.a.toFixed(0);
    return `hsla(${h}, ${s}, ${l}, ${a})`;
  }
}
