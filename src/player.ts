import { Unit } from "./actors/unit";
import { Cell } from "./actors/cell";

interface Args {
  heroSpawnCell: Cell;
}

export abstract class Player {
  hero: Unit;
  enemies: Unit[];

  constructor(args: Args) {
    this.hero = new Unit({
      cell: args.heroSpawnCell,
      unitType: "hero",
    });
    this.enemies = [];
  }
}
