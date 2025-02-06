import * as ex from "excalibur";
import { Board } from "./actors/board";
import { Hero } from "./actors/hero";

interface Args {
  engine: ex.Engine;
  board: Board;
}

export class Player {
  #hero?: Hero;
  #board: Board;
  #engine: ex.Engine;

  constructor({ board, engine }: Args) {
    this.#board = board;
    this.#engine = engine;

    engine.input.pointers.on("down", this.#onMouseDown.bind(this));
    this.#board.on("initialize", this.#initializeHero.bind(this));
  }

  #initializeHero(): void {
    const startTile = this.#board.getCellByPos(ex.vec(24, 16));

    this.#hero = new Hero({
      tile: startTile,
    });
    this.#board.addChild(this.#hero);
    const { camera } = this.#engine.currentScene;
    camera.addStrategy(new ex.LockCameraToActorStrategy(this.#hero));
    camera.zoom = 3;
  }

  async #onMouseDown(event: ex.PointerEvent): Promise<void> {
    const cell = this.#board.getCellByPos(event.worldPos);
    if (cell === null || this.#hero === undefined) {
      return;
    }

    console.log("Move player to", cell.pos);
    await this.#hero.moveTo(cell.pos);
    if (this.#isHeroAtEdgeOfBoard()) {
      console.log("Put a new tile!");
    }
  }

  #isHeroAtEdgeOfBoard(): boolean {
    if (this.#hero === undefined) {
      return false;
    }

    const heroPos = this.#hero.pos;

    const nextCellLeftPos = ex.vec(heroPos.x - 4, heroPos.y);
    const leftCell = this.#board.getCellByPos(nextCellLeftPos);

    if (leftCell === null) {
      return true;
    }

    const nextCellRightPos = ex.vec(heroPos.x + 8, heroPos.y);
    const rightCell = this.#board.getCellByPos(nextCellRightPos);

    if (rightCell === null) {
      return true;
    }

    return false;
  }
}
