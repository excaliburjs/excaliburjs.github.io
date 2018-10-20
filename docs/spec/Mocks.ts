﻿/// <reference path="../../build/dist/excalibur.d.ts" />

namespace Mocks {
  export interface ITime {
    now(): number;
    add(value: number): void;
    sub(value: number): void;
  }

  export interface IGameLoop {
    advance(duration: number): void;
    advance(duration: number, fps: number): void;
  }

  export class Mocker {
    navigator(): any {
      var _internalGamePads = {
        0: undefined,
        1: undefined,
        2: undefined,
        3: undefined,
        length: 4
      };
      var mockNavigator = {
        setGamepads: function(index: number, numAxis: number, numButtons: number) {
          _internalGamePads[index] = {
            axes: Array.apply(
              null,
              Array(numAxis).map(function() {
                return undefined;
              })
            ),
            buttons: Array.apply(
              null,
              Array(numButtons).map(function() {
                return { pressed: false, value: 0 };
              })
            ),
            connected: true,
            index: index,
            id: 'Mock Gamepad',
            mapping: 'standard',
            timing: 15335
          };
        },

        deleteGamepad: function(index: number) {
          _internalGamePads[index] = undefined;
        },

        setGamepadAxis: function(gamepadIndex: number, axisIndex: number, value: number) {
          _internalGamePads[gamepadIndex].axes[axisIndex] = value;
        },

        setGamepadButton: function(gamepadIndex: number, buttonIndex: number, value: number) {
          _internalGamePads[gamepadIndex].buttons[buttonIndex] = { pressed: value > 0 ? true : false, value: value };
        },

        getGamepads: function() {
          return _internalGamePads;
        }
      };

      return mockNavigator;
    }

    realengine(): ex.Engine {
      navigator = <any>this.navigator();

      return new ex.Engine({
        width: 500,
        height: 500,
        suppressConsoleBootMessage: true,
        suppressMinimumBrowserFeatureDetection: true
      });
    }

    engine(width: number, height: number) {
      var mockEngine;

      navigator = <any>this.navigator();

      mockEngine = {
        collisionStrategy: 0,
        timescale: 1,
        currentScene: null,
        keys: [],
        clicks: [],
        mouseDown: [],
        mouseMove: [],
        mouseUp: [],
        touchStart: [],
        touchMove: [],
        touchEnd: [],
        touchCancel: [],
        canvasWidth: width,
        canvasHeight: height,
        scenes: {},
        _animations: [],
        _logger: {
          debug: function() {
            /* do nothing */
          },
          info: function() {
            /* do nothing */
          },
          warn: function() {
            /* do nothing */
          },
          error: function() {
            /* do nothing */
          }
        },
        debug: {},
        stats: {
          currFrame: new ex.FrameStats(),
          prevFrame: new ex.FrameStats()
        },
        input: {
          keyboard: {
            update: function() {
              /* do nothing */
            }
          },
          pointers: new ex.Input.Pointers(<any>this),
          gamepads: {
            update: function() {
              /* do nothing */
            }
          }
        },
        canvas: {
          width: width,
          clientWidth: width,
          height: height,
          clientHeight: height
        },
        ctx: {
          canvas: {
            width: width,
            height: height
          },
          save: function() {
            /* do nothing */
          },
          restore: function() {
            /* do nothing */
          },
          translate: function() {
            /* do nothing */
          },
          rotate: function() {
            /* do nothing */
          },
          scale: function() {
            /* do nothing */
          }
        },
        getDrawWidth: function() {
          return width;
        },
        getDrawHeight: function() {
          return height;
        },
        worldToScreenCoordinates: ex.Engine.prototype.worldToScreenCoordinates,
        screenToWorldCoordinates: ex.Engine.prototype.screenToWorldCoordinates,
        addScene: ex.Engine.prototype.addScene,
        goToScene: ex.Engine.prototype.goToScene,
        stop: function() {
          /* do nothing */
        },
        onFatalException: function() {
          /* do nothing */
        },
        emit: function() {
          /* do nothing */
        },
        eventDispatcher: {
          emit: function() {
            /* do nothing */
          }
        },
        _hasStarted: true,
        _update: (<any>ex.Engine.prototype)._update,
        _preupdate: ex.Engine.prototype._preupdate,
        onPreUpdate: ex.Engine.prototype.onPreUpdate,
        _postupdate: ex.Engine.prototype._postupdate,
        onPostUpdate: ex.Engine.prototype.onPostUpdate,
        _draw: function() {
          /* do nothing */
        },
        _predraw: ex.Engine.prototype._predraw,
        onPreDraw: ex.Engine.prototype.onPreDraw,
        _postdraw: ex.Engine.prototype._postdraw,
        onPostDraw: ex.Engine.prototype.onPostDraw,
        _overrideInitialize: (<any>ex.Engine.prototype)._overrideInitialize,
        onInitialize: ex.Engine.prototype.onInitialize
      };
      return mockEngine;
    }

    /**
     * Get a game loop mock that allows you to control the frame advancement
     * of the main loop.
     */
    loop(game: ex.Engine): IGameLoop {
      var time = new Mocker().time();
      var loop = ex.Engine.createMainLoop(game, () => 0, time.now);

      return {
        /**
         * Advance the engine update loop by the given duration (in milliseconds).
         * By default, the FPS is set to 60 which means ~16ms per frame for 1 second duration.
         */
        advance: function(duration: number, fps: number = 60) {
          var times = Math.floor((duration / 1000) * fps);
          var delta = duration / times;

          for (var i = 0; i < times; i++) {
            time.add(delta);
            loop();
          }
        }
      };
    }

    /**
     * Get a time mock. Allows you to mock a now function and increment/decrement the value.
     */
    time(): ITime {
      var now = 0;

      return {
        add: function(value) {
          now += value;
        },
        sub: function(value) {
          now -= value;
        },
        now: function() {
          return now;
        }
      };
    }

    window() {
      var _handlers = {};

      var mockWindow = {
        addEventListener: function(name, handler) {
          _handlers[name] = handler;
        },
        emit: function(name, eventObject) {
          _handlers[name](eventObject);
        }
      };

      return mockWindow;
    }

    pointerEvent(eventName): ex.Input.PointerEvent {
      const coordinates = new ex.GlobalCoordinates(new ex.Vector(0, 0), new ex.Vector(0, 0), new ex.Vector(0, 0));
      const pointer = new ex.Input.Pointer();
      const pointerType = ex.Input.PointerType.Mouse;
      const pointerButton = ex.Input.PointerButton.Unknown;

      pointer.lastWorldPos = new ex.Vector(0, 0);

      let factory: ex.Input.PointerEventFactory<ex.Input.PointerEvent>;

      switch (eventName) {
        case 'up':
          factory = new ex.Input.PointerEventFactory(<any>ex.Input.PointerUpEvent);
          break;
        case 'down':
          factory = new ex.Input.PointerEventFactory(<any>ex.Input.PointerDownEvent);
          break;
        case 'move':
          factory = new ex.Input.PointerEventFactory(<any>ex.Input.PointerMoveEvent);
          break;
        case 'cancel':
          factory = new ex.Input.PointerEventFactory(<any>ex.Input.PointerCancelEvent);
          break;
        case 'enter':
          factory = new ex.Input.PointerEventFactory(<any>ex.Input.PointerEnterEvent);
          break;
        case 'leave':
          factory = new ex.Input.PointerEventFactory(<any>ex.Input.PointerLeaveEvent);
          break;
      }

      return factory.create(coordinates, pointer, 0, pointerType, pointerButton, {});
    }
  }
}
