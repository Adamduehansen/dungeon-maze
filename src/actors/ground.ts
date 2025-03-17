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
      // ex.Logger.getInstance().info("Entering cell", this);
    });

    this.on("pointerleave", () => {
      // ex.Logger.getInstance().info("Leaving cell", this);
    });

    this.on("pointerdown", () => {
      ex.Logger.getInstance().info("Clicked cell", this);
      this.scene?.emit("ground-clicked", this);
    });
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(1, 1);
    this.graphics.use(sprite);
  }

  /**
   * Determines if the object is of type {@linkcode Ground}
   */
  static isGround(obj: unknown): obj is Ground {
    if (typeof obj !== "object") {
      return false;
    }

    if (obj === undefined || obj === null) {
      return false;
    }

    if (("name" in obj) === false) {
      return false;
    }

    return obj.name === "Ground";
  }
}
