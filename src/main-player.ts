import * as ex from "excalibur";
import { Player } from "./player";

type Args = ConstructorParameters<typeof Player>[0] & {
  engine: ex.Engine;
};

export class MainPlayer extends Player {
  constructor({ engine, heroSpawnCell }: Args) {
    super({
      heroSpawnCell: heroSpawnCell,
    });

    engine.input.pointers.on("down", this.#onMouseDown.bind(this));
  }

  #onMouseDown(event: ex.PointerEvent): void {
    this.hero.moveTo(event.worldPos);
  }
}
