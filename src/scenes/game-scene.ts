import * as ex from "excalibur";
import { Board } from "../board";
import { Resources } from "../resources";
import { Hero } from "../actors/hero";

const HeroStartVector = ex.vec(24, 16);

export class GameScene extends ex.Scene {
  #hero!: Hero;

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    Board.instance.addStartTile(this);

    Board.instance.addTile({
      tile: Resources.tile1,
      pos: ex.vec(64, 0),
      scene: this,
    });

    this.#hero = new Hero({
      tile: Board.instance.getCellByPos(HeroStartVector),
    });
    this.add(this.#hero);

    this.camera.pos = ex.Vector.Zero;
    this.camera.zoom = 3;
  }
}
