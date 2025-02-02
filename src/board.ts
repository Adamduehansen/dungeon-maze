import * as ex from "excalibur";
import { Cell } from "./actors/cell";

export class Board {
  cells: Cell[] = [];
  rows: number;
  columns: number;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;

    for (let index = 0; index < this.rows * this.columns; index++) {
      const cell = new Cell({
        x: index % this.columns,
        y: Math.floor(index / this.columns),
        board: this,
      });
      this.cells.push(cell);
    }
  }

  getCell(x: number, y: number): Cell | null {
    return this.cells.find((cell) => cell.x === x && cell.y === y) ?? null;
  }

  getCellByPos(pos: ex.Vector): Cell | null {
    const x = Math.floor(pos.x / 8);
    const y = Math.floor(pos.y / 8);
    return this.getCell(x, y);
  }
}
