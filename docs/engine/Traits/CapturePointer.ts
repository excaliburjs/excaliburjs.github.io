import { IActorTrait } from '../Interfaces/IActorTrait';
import { Actor } from '../Actor';
import { Engine } from '../Engine';

export interface ICapturePointerConfig {
  /**
   * Capture PointerMove events (may be expensive!)
   */
  captureMoveEvents: boolean;

  /**
   * Capture PointerDrag events (may be expensive!)
   */
  captureDragEvents: boolean;
}

/**
 * Revises pointer events path accordingly to the actor
 */
export class CapturePointer implements IActorTrait {
  public update(actor: Actor, engine: Engine) {
    if (!actor.enableCapturePointer) {
      return;
    }
    if (actor.isKilled()) {
      return;
    }

    engine.input.pointers.revisePointerEventsPaths(actor);
  }
}
