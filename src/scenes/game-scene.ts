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

    const board = new Board();
    for (const cell of board.cells) {
      this.add(cell);
    }

    const mainPlayer = new MainPlayer({
      heroSpawnCell: board.cells[0],
      engine: this.engine,
    });
    this.add(mainPlayer.hero);

    this.#players.push(mainPlayer);
  }
}
