import * as ex from "excalibur";
import { Cell } from "../actors/cell";
import { Player } from "../player";
import { HumanPlayer } from "../human-player";

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

    const cell1 = new Cell({
      pos: ex.vec(100, 100),
    });
    this.add(cell1);

    const cell2 = new Cell({
      pos: ex.vec(150, 100),
    });
    this.add(cell2);

    const humanPlayer = new HumanPlayer({
      heroSpawnCell: cell1,
    });
    this.add(humanPlayer.hero);

    this.#players = [humanPlayer];
  }
}
