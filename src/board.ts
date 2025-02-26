import * as ex from "excalibur";
import { Resources } from "./resources";
import { TiledResource } from "@excaliburjs/plugin-tiled";

let instance: Board | null = null;

export class Board {
  readonly tiledResources: TiledResource[] = [];

  private constructor() {}

  static get instance(): Board {
    if (instance === null) {
      instance = new Board();
    }

    return instance;
  }

  addStartTile(scene: ex.Scene): void {
    this.addTile({
      tile: Resources.startTile,
      pos: ex.Vector.Zero,
      scene: scene,
    });
  }

  addTile(options: {
    pos: ex.Vector;
    tile: TiledResource;
    scene: ex.Scene;
  }): void {
    options.tile.addToScene(options.scene, {
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
