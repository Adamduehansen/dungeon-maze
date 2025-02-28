export class TiledResource implements ex.Loadable<unknown> {
  data: unknown;
  #path: string;

  constructor(path: `${string}.tmj`) {
    this.#path = path;
  }

  async load(): Promise<void> {
    const response = await fetch(this.#path);
    const json = await response.json();
    this.#parse(json);
  }

  isLoaded(): boolean {
    return false;
  }

  #parse(data: unknown) {
    console.log("This is the data:", data);
  }
}
