import * as ex from "excalibur";
import { Player } from "../player";
import { MainPlayer } from "../main-player";
import { Board } from "../board";

export class GameScene extends ex.Scene {
  #players: Player[] = [];

  constructor() {
    super();
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    const board = new Board(4, 4);
    for (const cell of board.cells) {
      this.add(cell);
    }

    const mainPlayer = new MainPlayer({
      heroSpawnCell: board.cells[0],
      engine: this.engine,
      board: board,
    });
    this.add(mainPlayer.hero);

    this.camera.addStrategy(new ex.LockCameraToActorStrategy(mainPlayer.hero));
    this.camera.zoom = 3;

    this.#players.push(mainPlayer);
  }
}
