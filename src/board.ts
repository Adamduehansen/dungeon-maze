import * as ex from "excalibur";
import { Cell } from "./actors/cell";

export class Board {
  cells: Cell[] = [];

  constructor() {
    this.cells.push(
      new Cell({
        pos: ex.vec(100, 100),
      }),
    );

    this.cells.push(
      new Cell({
        pos: ex.vec(150, 150),
      }),
    );
  }
}
