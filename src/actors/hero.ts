import * as ex from "excalibur";
import { spriteSheet } from "../resources";
import { Unit } from "./unit";

export class Hero extends Unit {
  speed = 2;

  constructor() {
    super({
      name: "Hero",
      pos: ex.vec(0, 0),
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(4, 0);
    this.graphics.use(sprite);
  }
}
