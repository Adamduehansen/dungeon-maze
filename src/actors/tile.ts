import * as ex from "excalibur";

type Props = Pick<ex.ActorArgs, "pos">;

export class Tile extends ex.Actor {
  #actor?: ex.Actor;

  constructor({ pos }: Props) {
    super({
      pos: pos,
      name: "Tile",
      width: 8,
      height: 8,
      color: ex.Color.Gray,
    });
  }

  addActor(actor: ex.Actor): void {
    this.#actor = actor;
  }
}
