import * as ex from "excalibur";
import { Hero } from "./actors/hero";

interface Args {
  heroSpawnPos: ex.Vector;
}

export abstract class Player {
  hero: Hero;

  constructor(args: Args) {
    this.hero = new Hero({
      pos: args.heroSpawnPos,
    });
  }
}
