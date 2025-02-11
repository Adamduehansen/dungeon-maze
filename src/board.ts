import * as ex from "excalibur";
import { Resources } from "./resources";
import { TiledResource } from "@excaliburjs/plugin-tiled";

export class Board {
  readonly #scene: ex.Scene;
  readonly tiledResources: TiledResource[] = [];

  constructor(scene: ex.Scene) {
    this.#scene = scene;
    this.addStartTile();
  }

  addStartTile(): void {
    this.addTile({
      tile: Resources.startTile,
      pos: ex.Vector.Zero,
    });
  }

  addTile(options: {
    pos: ex.Vector;
    tile: TiledResource;
  }): void {
    options.tile.addToScene(this.#scene, {
      pos: options.pos,
    });
    this.tiledResources.push(options.tile);
  }

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
