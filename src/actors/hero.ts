import * as ex from "excalibur";
import { spriteSheet } from "../resources";
import { Cell } from "./cell";
import { Unit } from "./unit";

interface Args {
  cell: Cell;
}

export class Hero extends Unit {
  constructor({ cell }: Args) {
    super({
      name: "Hero",
      cell: cell,
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(4, 0);
    this.graphics.use(sprite);
  }
}
