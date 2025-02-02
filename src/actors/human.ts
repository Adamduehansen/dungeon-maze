import * as ex from "excalibur";
import { spriteSheet } from "../resources";

type HumanArgs = Pick<ex.ActorArgs, "pos">;

export class Human extends ex.Actor {
  constructor({ pos }: HumanArgs) {
    super({
      pos: pos,
      name: "Human",
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(4, 0);
    // sprite.width = 16;
    // sprite.height = 16;
    this.graphics.use(sprite);
  }

  moveTo(pos: ex.Vector): void {
    this.actions.moveTo({
      duration: 200,
      pos: pos,
    });
  }
}
