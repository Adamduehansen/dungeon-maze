import * as ex from "excalibur";
import { Cell } from "../actors/cell";
import { Player } from "../player";
import { MainPlayer } from "../main-player";

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
      pos: ex.vec(150, 150),
    });
    this.add(cell2);

    const mainPlayer = new MainPlayer({
      heroSpawnCell: cell1,
      engine: this.engine,
    });
    this.add(mainPlayer.hero);

    this.#players.push(mainPlayer);
  }
}
