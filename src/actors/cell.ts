import * as ex from "excalibur";

type Props = Pick<ex.ActorArgs, "pos">;

export class Cell extends ex.Actor {
  #actor?: ex.Actor;

  constructor({ pos }: Props) {
    super({
      pos: pos,
      name: "Cell",
      width: 8,
      height: 8,
      color: ex.Color.Gray,
    });
  }

  addActor(actor: ex.Actor): void {
    this.#actor = actor;
  }
}
