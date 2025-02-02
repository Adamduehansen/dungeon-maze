import * as ex from "excalibur";
import { Cell } from "./actors/cell";
import { Tile } from "./tile";

export class Board {
  tiles: Tile[] = [];

  constructor() {
    const startTile = new Tile(4, 8);
    this.tiles.push(startTile);
  }

  getCell(x: number, y: number): Cell | null {
    return this.tiles
      .map((tile) => tile.cells)
      .flat()
      .find((cell) => cell.x === x && cell.y === y) ?? null;
  }

  getCellByPos(pos: ex.Vector): Cell | null {
    const x = Math.floor(pos.x / 8);
    const y = Math.floor(pos.y / 8);
    console.log(x, y);

    return this.getCell(x, y);
  }
}
