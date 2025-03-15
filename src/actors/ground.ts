import * as ex from "excalibur";
import { spriteSheet } from "../resources";

interface Args {
  pos: ex.Vector;
}

export class Ground extends ex.Actor {
  constructor(args: Args) {
    super({
      name: "Ground",
      pos: args.pos,
      anchor: ex.vec(0, 0),
      width: 8,
      height: 8,
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
    const sprite = spriteSheet.getSprite(1, 1);
    this.graphics.use(sprite);
  }
}
