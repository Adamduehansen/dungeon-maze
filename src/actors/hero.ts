import * as ex from "excalibur";
import { spriteSheet } from "../resources";
import { Unit } from "./unit";

interface Args {
  tile: ex.Tile | ex.IsometricTile | null;
}

export class Hero extends Unit {
  constructor(args: Args) {
    super({
      name: "Hero",
      pos: args.tile!.pos,
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    const sprite = spriteSheet.getSprite(4, 0);
    this.graphics.use(sprite);
  }

  onSelected(): void {
    ex.Logger.getInstance().info("Hero selected");
    this.graphics.current!.tint = ex.Color.Green;
  }
}
