import * as ex from "excalibur";
import { Cell } from "./cell";
import { spriteSheet } from "../resources";

type UnitType = "hero";

interface Args {
  unitType: UnitType;
  cell: Cell;
}

export class Unit extends ex.Actor {
  constructor(args: Args) {
    super({
      pos: args.cell.pos,
      name: "Hero",
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(4, 0);
    this.graphics.use(sprite);
  }

  moveTo(pos: ex.Vector): void {
    this.actions.moveTo({
      duration: 200,
      pos: pos,
    });
  }
}
