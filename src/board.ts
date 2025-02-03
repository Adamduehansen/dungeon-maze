import * as ex from "excalibur";
import { Cell } from "./actors/cell";
import { StartTileConfig, Tile, TileConfig } from "./tile";

export class Board extends ex.Actor {
  readonly tiles: Tile[] = [];

  constructor() {
    super({
      pos: ex.Vector.Zero,
    });
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.addTile(ex.vec(0, 0), StartTileConfig);

    // this.addTile(ex.vec(64, 0), {
    //   columns: 4,
    //   rows: 4,
    // });
  }

  addTile(pos: ex.Vector, tileConfig: TileConfig) {
    const tile2 = new Tile(pos, tileConfig);
    this.addChild(tile2);
    this.tiles.push(tile2);
  }

  getCell(column: number, row: number): Cell | null {
    return this.tiles
      .map((tile) => tile.cells)
      .flat()
      .find((cell) => cell.column === column && cell.row === row) ?? null;
  }

  getCellByPos(pos: ex.Vector): Cell | null {
    const column = Math.floor(pos.x / 8);
    const row = Math.floor(pos.y / 8);
    console.log(column, row);

    return this.getCell(column, row);
  }
}
