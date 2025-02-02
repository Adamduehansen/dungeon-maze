import * as ex from "excalibur";
import { Cell } from "./cell";

interface Args {
  name: string;
  cell: Cell;
}

export abstract class Unit extends ex.Actor {
  constructor(args: Args) {
    super({
      pos: args.cell.pos,
      anchor: ex.Vector.Zero,
    });
  }

  moveTo(pos: ex.Vector): void {
    this.actions.moveTo({
      duration: 200,
      pos: pos,
    });
  }
}
