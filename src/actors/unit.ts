import * as ex from "excalibur";

type Args = Pick<ex.ActorArgs, "name" | "pos">;

export abstract class Unit extends ex.Actor {
  constructor(args: Args) {
    super({
      pos: args.pos,
      anchor: ex.Vector.Zero,
      z: 100,
    });
  }

  moveTo(pos: ex.Vector): Promise<void> {
    return new Promise((resolve) => {
      this.actions.moveTo({
        duration: 200,
        pos: pos,
      }).callMethod(resolve);
    });
  }
}
