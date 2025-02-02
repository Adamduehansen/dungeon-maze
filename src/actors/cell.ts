import * as ex from "excalibur";
import { Board } from "../board";

interface Args {
  x: number;
  y: number;
  board: Board;
}

export class Cell extends ex.Actor {
  #actor?: ex.Actor;
  readonly x: number;
  readonly y: number;

  constructor({ x, y, board }: Args) {
    super({
      pos: ex.vec(x * 8, y * 8),
      name: `Cell [${x}, ${y}]`,
      width: 8,
      height: 8,
      color: ex.Color.Gray,
      anchor: ex.Vector.Zero,
    });

    this.x = x;
    this.y = y;
  }

  addActor(actor: ex.Actor): void {
    this.#actor = actor;
  }
}
