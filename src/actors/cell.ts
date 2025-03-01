import * as ex from "excalibur";
import { spriteSheet } from "../resources";

export class Cell extends ex.Actor {
  constructor(pos: ex.Vector) {
    super({
      name: "cell",
      pos: pos,
    });

    this.on("pointerenter", () => {
      ex.Logger.getInstance().info("Entering cell", this);
    });

    this.on("pointerleave", () => {
      ex.Logger.getInstance().info("Leaving cell", this);
    });
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(1, 1).clone();
    this.graphics.use(sprite);
  }
}
