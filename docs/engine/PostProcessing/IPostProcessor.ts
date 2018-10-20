﻿/**
 * Adds post processing support for the engine, can process raw pixel data and manipulate canvas directly.
 *
 * [[include:PostProcessors.md]]
 */
export interface IPostProcessor {
  process(image: ImageData, out: CanvasRenderingContext2D): void;
}
