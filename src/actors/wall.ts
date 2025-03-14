import * as ex from "excalibur";
import { spriteSheet } from "../resources";

interface Args {
  pos: ex.Vector;
}

export class Wall extends ex.Actor {
  constructor(args: Args) {
    super({
      pos: args.pos,
      anchor: ex.vec(0, 0),
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(1, 0);
    this.graphics.use(sprite);
  }
}
