import * as ex from "excalibur";
import { Player } from "../player";
import { Board } from "../actors/board";
import { Resources } from "../resources";

export class GameScene extends ex.Scene {
  #player!: Player;
  #board!: Board;

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    this.#board = new Board(this);
    this.#board.addStartTile();
    this.#board.addTile({
      tile: Resources.tile1,
      pos: ex.vec(64, 0),
    });

    this.#player = new Player({
      engine: this.engine,
      board: this.#board,
    });
  }
}
