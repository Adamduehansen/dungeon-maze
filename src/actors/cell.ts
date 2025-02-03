import * as ex from "excalibur";

type CellType = "floor" | "wall";

export interface CellConfig {
  type: "floor" | "wall";
}

interface Args {
  column: number;
  row: number;
  type: CellType;
}

export class Cell extends ex.Actor {
  readonly column: number;
  readonly row: number;

  constructor({ column, row, type }: Args) {
    super({
      pos: ex.vec(column * 8, row * 8),
      name: `Cell [${column}, ${row}]`,
      width: 8,
      height: 8,
      anchor: ex.Vector.Zero,
    });

    this.column = column;
    this.row = row;
  }
}
