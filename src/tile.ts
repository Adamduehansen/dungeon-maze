import { Cell } from "./actors/cell";

export class Tile {
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
      });
      this.cells.push(cell);
    }
  }
}
