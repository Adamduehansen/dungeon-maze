import * as ex from "excalibur";
import { Cell, CellConfig } from "./actors/cell";

export interface TileConfig {
  rows: number;
  columns: number;
  cells: CellConfig[][];
}

export const StartTileConfig: TileConfig = {
  rows: 4,
  columns: 8,
  cells: [
    [
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
    ],
    [
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "wall" },
      { type: "wall" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
    ],
    [
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
      { type: "wall" },
      { type: "wall" },
      { type: "floor" },
      { type: "floor" },
      { type: "floor" },
    ],
    [
      { type: "wall" },
      { type: "wall" },
      { type: "wall" },
      { type: "wall" },
      { type: "wall" },
      { type: "wall" },
      { type: "wall" },
      { type: "wall" },
    ],
  ],
};

export class Tile extends ex.Actor {
  readonly cells: Cell[] = [];

  #tileConfig: TileConfig;

  constructor(pos: ex.Vector, tileConfig: TileConfig) {
    super({
      pos: pos,
    });

    this.#tileConfig = tileConfig;
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    const { rows, columns, cells } = this.#tileConfig;

    for (let index = 0; index < rows * columns; index++) {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const cell = new Cell({
        column: column,
        row: row,
        type: cells[row][column].type,
      });
      this.addChild(cell);
      this.cells.push(cell);
    }
  }
}
