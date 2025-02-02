import { Player } from "./player";

type Args = ConstructorParameters<typeof Player>["0"];

export class HumanPlayer extends Player {
  constructor(args: Args) {
    super(args);
  }
}
