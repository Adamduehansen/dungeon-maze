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

    const cell = new Cell({
      pos: ex.vec(150, 150),
    });
    this.add(cell);

    // Camera
    this.camera.zoom = 2;
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);

    const humanPlayer = new HumanPlayer({
      heroSpawnPos: ex.vec(100, 100),
    });
    this.add(humanPlayer.hero);

    this.camera.pos = humanPlayer.hero.pos;

    this.#players = [humanPlayer];
  }
}
