import { Logger } from './Log';
/**
 * This is the list of features that will be used to log the supported
 * features to the console when Detector.logBrowserFeatures() is called.
 */

const REPORTED_FEATURES: { [key: string]: string } = {
  webgl: 'WebGL',
  webaudio: 'WebAudio',
  gamepadapi: 'Gamepad API'
};

/**
 * Interface for detected browser features matrix
 */
export interface IDetectedFeatures {
  readonly canvas: boolean;
  readonly arraybuffer: boolean;
  readonly dataurl: boolean;
  readonly objecturl: boolean;
  readonly rgba: boolean;
  readonly webaudio: boolean;
  readonly webgl: boolean;
  readonly gamepadapi: boolean;
}

interface ICriticalTests {
  canvasSupport(): boolean;
  arrayBufferSupport(): boolean;
  dataUrlSupport(): boolean;
  objectUrlSupport(): boolean;
  rgbaSupport(): boolean;
}

interface IWarningTests {
  webAudioSupport(): boolean;
  webglSupport(): boolean;
}

/**
 * Excalibur internal feature detection helper class
 */
export class Detector {
  private _features: IDetectedFeatures = null;

  public failedTests: string[] = [];

  public constructor() {
    this._features = this._loadBrowserFeatures();
  }

  /**
   * Returns a map of currently supported browser features. This method
   * treats the features as a singleton and will only calculate feature
   * support if it has not previously been done.
   */
  public getBrowserFeatures(): IDetectedFeatures {
    if (this._features === null) {
      this._features = this._loadBrowserFeatures();
    }
    return this._features;
  }

  /**
   * Report on non-critical browser support for debugging purposes.
   * Use native browser console colors for visibility.
   */
  public logBrowserFeatures(): void {
    let msg = '%cSUPPORTED BROWSER FEATURES\n==========================%c\n';
    let args = ['font-weight: bold; color: navy', 'font-weight: normal; color: inherit'];

    let supported: any = this.getBrowserFeatures();
    for (let feature of Object.keys(REPORTED_FEATURES)) {
      if (supported[feature]) {
        msg += '(%c\u2713%c)'; // (✓)
        args.push('font-weight: bold; color: green');
        args.push('font-weight: normal; color: inherit');
      } else {
        msg += '(%c\u2717%c)'; // (✗)
        args.push('font-weight: bold; color: red');
        args.push('font-weight: normal; color: inherit');
      }

      msg += ' ' + REPORTED_FEATURES[feature] + '\n';
    }

    args.unshift(msg);
    console.log.apply(console, args);
  }

  /**
   * Executes several IIFE's to get a constant reference to supported
   * features within the current execution context.
   */
  private _loadBrowserFeatures(): IDetectedFeatures {
    return {
      // IIFE to check canvas support
      canvas: (() => {
        return this._criticalTests.canvasSupport();
      })(),

      // IIFE to check arraybuffer support
      arraybuffer: (() => {
        return this._criticalTests.arrayBufferSupport();
      })(),

      // IIFE to check dataurl support
      dataurl: (() => {
        return this._criticalTests.dataUrlSupport();
      })(),

      // IIFE to check objecturl support
      objecturl: (() => {
        return this._criticalTests.objectUrlSupport();
      })(),

      // IIFE to check rgba support
      rgba: (() => {
        return this._criticalTests.rgbaSupport();
      })(),

      // IIFE to check webaudio support
      webaudio: (() => {
        return this._warningTest.webAudioSupport();
      })(),

      // IIFE to check webgl support
      webgl: (() => {
        return this._warningTest.webglSupport();
      })(),

      // IIFE to check gamepadapi support
      gamepadapi: (() => {
        return !!(<any>navigator).getGamepads;
      })()
    };
  }

  // critical browser features required for ex to run
  private _criticalTests: ICriticalTests = {
    // Test canvas/2d context support
    canvasSupport: function() {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    },

    // Test array buffer support ex uses for downloading binary data
    arrayBufferSupport: function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/');
      try {
        xhr.responseType = 'arraybuffer';
      } catch (e) {
        return false;
      }
      return xhr.responseType === 'arraybuffer';
    },

    // Test data urls ex uses for sprites
    dataUrlSupport: function() {
      var canvas = document.createElement('canvas');
      return canvas.toDataURL('image/png').indexOf('data:image/png') === 0;
    },

    // Test object url support for loading
    objectUrlSupport: function() {
      return 'URL' in window && 'revokeObjectURL' in URL && 'createObjectURL' in URL;
    },

    // RGBA support for colors
    rgbaSupport: function() {
      var style = document.createElement('a').style;
      style.cssText = 'background-color:rgba(150,255,150,.5)';
      return ('' + style.backgroundColor).indexOf('rgba') > -1;
    }
  };

  // warnings excalibur performance will be degraded
  private _warningTest: IWarningTests = {
    webAudioSupport: function() {
      return !!(
        (<any>window).AudioContext ||
        (<any>window).webkitAudioContext ||
        (<any>window).mozAudioContext ||
        (<any>window).msAudioContext ||
        (<any>window).oAudioContext
      );
    },
    webglSupport: function() {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('webgl'));
    }
  };

  public test(): boolean {
    // Critical test will for ex not to run
    var failedCritical = false;
    for (var test in this._criticalTests) {
      if (!this._criticalTests[<keyof ICriticalTests>test].call(this)) {
        this.failedTests.push(test);
        Logger.getInstance().error('Critical browser feature missing, Excalibur requires:', test);
        failedCritical = true;
      }
    }
    if (failedCritical) {
      return false;
    }

    // Warning tests do not for ex to return false to compatibility
    for (var warning in this._warningTest) {
      if (!this._warningTest[<keyof IWarningTests>warning]()) {
        Logger.getInstance().warn('Warning browser feature missing, Excalibur will have reduced performance:', warning);
      }
    }

    return true;
  }
}
