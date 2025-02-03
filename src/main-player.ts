import * as ex from "excalibur";
import { Player } from "./player";
import { Board } from "./board";

interface Args {
  engine: ex.Engine;
  board: Board;
}

export class MainPlayer extends Player {
  #board: Board;

  constructor({ board, engine }: Args) {
    super({
      // heroSpawnCell: heroSpawnCell,
    });
    this.#board = board;

    engine.input.pointers.on("down", this.#onMouseDown.bind(this));
  }

  #onMouseDown(event: ex.PointerEvent): void {
    const cell = this.#board.getCellByPos(event.worldPos);
    console.log(cell);

    // console.log(this.#board.isEdgeCell(cell));

    // if (cell === null) {
    //   return;
    // }

    // this.hero.moveTo(cell.pos);
  }
}
