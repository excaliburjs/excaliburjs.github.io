import { ILoadable } from './ILoadable';
import { Engine } from '../Engine';

export interface ILoader extends ILoadable {
  suppressPlayButton: boolean;
  draw(ctx: CanvasRenderingContext2D, delta: number): void;
  update(engine: Engine, delta: number): void;
}
