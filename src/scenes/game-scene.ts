import * as ex from "excalibur";
import { Board } from "../board";
import { Resources } from "../resources";
import { Hero } from "../actors/hero";

export class GameScene extends ex.Scene {
  #hero!: Hero;
  #board!: Board;

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    this.#board = new Board(this);
    this.#board.addTile({
      tile: Resources.tile1,
      pos: ex.vec(64, 0),
    });

    this.#hero = new Hero({
      tile: this.#board.getCellByPos(ex.vec(24, 16)),
    });
    this.add(this.#hero);

    this.camera.pos = ex.Vector.Zero;
    this.camera.zoom = 3;

    // this.#player = new Player({
    //   engine: this.engine,
    //   board: this.#board,
    // });
  }
}
