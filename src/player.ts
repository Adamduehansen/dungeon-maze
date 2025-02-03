import { Unit } from "./actors/unit";
import { Cell } from "./actors/cell";
import { Hero } from "./actors/hero";

interface Args {
  // heroSpawnCell: Cell;
}

export abstract class Player {
  // hero: Hero;
  enemies: Unit[];

  constructor({/* heroSpawnCell */}: Args) {
    // this.hero = new Hero({
    //   cell: heroSpawnCell,
    // });
    this.enemies = [];
  }
}
