import * as ex from "excalibur";

type Args = Pick<ex.ActorArgs, "name" | "pos">;

export abstract class Unit extends ex.Actor {
  constructor(args: Args) {
    super({
      pos: args.pos,
      anchor: ex.Vector.Zero,
      z: 100,
      width: 8,
      height: 8,
    });
  }

  onInitialize(_engine: ex.Engine): void {
    this.events.on("pointerdown", this.onSelected.bind(this));
  }

  moveTo(pos: ex.Vector): Promise<void> {
    return new Promise((resolve) => {
      this.actions.moveTo({
        duration: 200,
        pos: pos,
      }).callMethod(resolve);
    });
  }

  abstract onSelected(): void;
}
