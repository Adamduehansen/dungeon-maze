import * as v from "valibot";

const ObjectSchema = v.object({
  x: v.number(),
  y: v.number(),
  gid: v.number(),
  height: v.number(),
});

const ObjectGroupSchema = v.object({
  type: v.literal("objectgroup"),
  objects: v.array(ObjectSchema),
});

const TiledDataSchema = v.object({
  layers: v.array(ObjectGroupSchema),
});

interface TiledObject {
  x: number;
  y: number;
  type: number;
}

interface TiledData {
  objects: TiledObject[];
}

export class TiledSource implements ex.Loadable<TiledData> {
  data: TiledData = {
    objects: [],
  };
  #path: string;

  #isLoaded = false;

  constructor(path: `${string}.tmj`) {
    this.#path = path;
  }

  async load(): Promise<TiledData> {
    const response = await fetch(this.#path);
    const json = await response.json();
    const tiledData = v.parse(TiledDataSchema, json);

    this.data = {
      objects: tiledData.layers[0].objects.map((object): TiledObject => {
        return {
          x: object.x,
          y: object.y - object.height, // Subtract the height of the tile to make up for Tileds position
          type: object.gid,
        };
      }),
    };
    this.#isLoaded = true;
    return this.data;
  }

  isLoaded(): boolean {
    return this.#isLoaded;
  }
}
