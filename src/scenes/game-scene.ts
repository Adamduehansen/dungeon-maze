import * as ex from "excalibur";
import { Resources } from "../resources";
import { Tile } from "../actors/tile";

export class GameScene extends ex.Scene {
  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    const tile = new Tile(ex.Vector.Zero, Resources.startTile);
    this.add(tile);

    this.camera.pos = ex.Vector.Zero;
    this.camera.zoom = 3;
  }
}
