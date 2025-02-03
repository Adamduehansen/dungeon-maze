import * as ex from "excalibur";
import { Board } from "./board";

interface Args {
  engine: ex.Engine;
  board: Board;
}

export class Player {
  #board: Board;

  constructor({ board, engine }: Args) {
    this.#board = board;

    engine.input.pointers.on("down", this.#onMouseDown.bind(this));
  }

  #onMouseDown(event: ex.PointerEvent): void {
    const cell = this.#board.getCellByPos(event.worldPos);
    console.log("Move player to", cell?.pos);

    // console.log(this.#board.isEdgeCell(cell));

    // if (cell === null) {
    //   return;
    // }

    // this.hero.moveTo(cell.pos);
  }
}
