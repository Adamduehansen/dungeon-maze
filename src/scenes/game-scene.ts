import * as ex from "excalibur";
import { Resources } from "../resources";
import { Tile } from "../actors/tile";

export class GameScene extends ex.Scene {
  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    const startTile = new Tile(ex.Vector.Zero, Resources.startTile);
    this.add(startTile);

    const tile = new Tile(ex.vec(64, 0), Resources.tile1);
    this.add(tile);

    this.camera.pos = ex.Vector.Zero;
    this.camera.zoom = 3;
  }
}
