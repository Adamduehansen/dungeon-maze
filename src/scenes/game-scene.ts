import * as ex from "excalibur";
import { Resources } from "../resources";
import { Tile } from "../actors/tile";
// import { Hero } from "../actors/hero";

// const HeroStartVector = ex.vec(24, 16);

export class GameScene extends ex.Scene {
  // #hero!: Hero;

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    const { data } = Resources.startTile;
    const tile = new Tile({
      columns: data.width,
      rows: data.height,
      layers: data.layers,
    });
    this.add(tile);

    this.camera.pos = ex.Vector.Zero;
    this.camera.zoom = 3;
  }
}
