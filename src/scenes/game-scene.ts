import * as ex from "excalibur";
import { Player } from "../player";
import { Board } from "../board";

export class GameScene extends ex.Scene {
  #player!: Player;
  #board!: Board;

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    this.#board = new Board();
    this.add(this.#board);

    this.#player = new Player({
      engine: this.engine,
      board: this.#board,
    });

    // this.add(mainPlayer.hero);

    // this.camera.addStrategy(new ex.LockCameraToActorStrategy(mainPlayer.hero));
    // this.camera.zoom = 3;

    // this.#players.push(mainPlayer);
  }
}
