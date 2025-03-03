import * as ex from "excalibur";
import { Resources } from "../resources";
import { ObjectGroup, Tile, TileLayer } from "../actors/tile";

export class GameScene extends ex.Scene {
  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    const { data } = Resources.startTile;
    const tile = new Tile(ex.Vector.Zero, {
      columns: data.width,
      rows: data.height,
      layers: data.layers,
    });
    this.add(tile);

    this.camera.pos = ex.Vector.Zero;
    this.camera.zoom = 3;
  }
}
