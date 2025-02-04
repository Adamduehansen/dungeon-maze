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

  constructor({ board, engine }: Args) {
    this.#board = board;
    engine.input.pointers.on("down", this.#onMouseDown.bind(this));

    this.#board.on("initialize", () => {
      const startTile = this.#board.getCellByPos(ex.vec(0, 0));

      this.#hero = new Hero({
        tile: startTile,
      });
      this.#board.addChild(this.#hero);
    });
  }

  #onMouseDown(event: ex.PointerEvent): void {
    const cell = this.#board.getCellByPos(event.worldPos);
    if (cell === null) {
      return;
    }

    console.log("Move player to", cell.pos);
    this.#hero?.moveTo(cell.pos);

    // console.log(this.#board.isEdgeCell(cell));

    // if (cell === null) {
    //   return;
    // }

    // this.hero.moveTo(cell.pos);
  }
}
