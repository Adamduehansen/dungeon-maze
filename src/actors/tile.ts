import * as ex from "excalibur";

type TileLayer = {
  data: number[];
};

type TileData = {
  columns: number;
  rows: number;
  layers: TileLayer[];
};

export class Tile extends ex.Actor {
  #tileData: TileData;

  constructor(tileData: TileData) {
    super();
    this.#tileData = tileData;
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.logger.info(this.#tileData);

    // TODO: init cells
  }
}
