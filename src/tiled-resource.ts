import * as v from "valibot";

const TiledLayerSchema = v.object({
  data: v.array(v.number()),
  type: v.literal("tilelayer"),
});

const ObjectGroupSchema = v.object({
  type: v.literal("objectgroup"),
  objects: v.array(v.object({})),
});

const TiledDataSchema = v.object({
  height: v.number(),
  width: v.number(),
  layers: v.array(v.union([TiledLayerSchema, ObjectGroupSchema])),
});

type TiledData = v.InferOutput<typeof TiledDataSchema>;

export class TiledResource implements ex.Loadable<TiledData> {
  data: TiledData = {
    height: 0,
    width: 0,
    layers: [],
  };
  #path: string;

  constructor(path: `${string}.tmj`) {
    this.#path = path;
  }

  async load(): Promise<TiledData> {
    const response = await fetch(this.#path);
    const json = await response.json();
    this.data = v.parse(TiledDataSchema, json);
    return this.data;
  }

  isLoaded(): boolean {
    return false;
  }
}
