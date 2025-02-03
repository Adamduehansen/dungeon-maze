import * as ex from "excalibur";
import { Player } from "../player";
import { MainPlayer } from "../main-player";
import { Board } from "../board";
import { Tile } from "../tile";

export class GameScene extends ex.Scene {
  #board!: Board;
  #players: Player[] = [];

  constructor() {
    super();
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    this.#board = new Board();
    this.add(this.#board);

    const mainPlayer = new MainPlayer({
      // heroSpawnCell: ex.Vector.Zero,
      engine: this.engine,
      board: this.#board,
    });
    // this.add(mainPlayer.hero);

    // this.camera.addStrategy(new ex.LockCameraToActorStrategy(mainPlayer.hero));
    // this.camera.zoom = 3;

    // this.#players.push(mainPlayer);
  }
}
