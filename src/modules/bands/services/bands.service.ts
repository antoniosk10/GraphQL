import { RESTDataSource } from "apollo-datasource-rest";

class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  getBands() {
    return this.get("/").then((res) =>
      res.items.map((item: any) => ({
        ...item,
        id: item._id,
        genres: item.genresIds,
      }))
    );
  }

  getBand(id: string) {
    return this.get(`/${id}`);
  }

  getBandsByIds(arrayIds: Array<string>) {
    return Promise.allSettled(
      arrayIds.map((id: string) => this.getBand(id))
    ).then((res) =>
      (res as unknown as PromiseFulfilledResult<any>).value
        ? (res as unknown as PromiseFulfilledResult<any>).value
        : []
    );
  }
}

export const bandsService = new BandsService();
