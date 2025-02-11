import * as ex from "excalibur";
import { Board } from "../board";
import { Resources } from "../resources";

export class GameScene extends ex.Scene {
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

    // this.#hero = new Hero();

    // this.camera.pos = ex.Vector.Zero;
    // this.camera.zoom = 3;

    // this.#player = new Player({
    //   engine: this.engine,
    //   board: this.#board,
    // });
  }
}
