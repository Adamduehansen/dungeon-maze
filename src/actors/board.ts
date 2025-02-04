import * as ex from "excalibur";
import { Resources } from "../resources";
import { TiledResource } from "@excaliburjs/plugin-tiled";

export class Board extends ex.Actor {
  readonly tiledResources: TiledResource[] = [];

  constructor() {
    super({
      name: "Board",
      pos: ex.Vector.Zero,
    });
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    const startTile = Resources.startTile;
    startTile.addToScene(engine.currentScene);
    this.tiledResources.push(startTile);

    const tile1 = Resources.tile1;
    tile1.addToScene(engine.currentScene, {
      pos: ex.vec(64, 0),
    });
    this.tiledResources.push(tile1);
  }

  // addTile(pos: ex.Vector, tileConfig: TileConfig): void {
  //   const tile2 = new Tile(pos, tileConfig);
  //   this.addChild(tile2);
  //   this.tiles.push(tile2);
  // }

  // getCell(column: number, row: number): Cell | null {
  //   return this.tiles
  //     .map((tile) => tile.cells)
  //     .flat()
  //     .find((cell) => cell.column === column && cell.row === row) ?? null;
  // }

  getCellByPos(pos: ex.Vector): ex.Tile | ex.IsometricTile | null {
    let selectedTile: ex.Tile | ex.IsometricTile | null = null;
    for (const tiledResource of this.tiledResources) {
      const tileAtPoint = tiledResource.getTileByPoint("Ground", pos);
      if (tileAtPoint === null) {
        continue;
      }

      selectedTile = tileAtPoint.exTile;
      break;
    }

    return selectedTile;
  }
}
