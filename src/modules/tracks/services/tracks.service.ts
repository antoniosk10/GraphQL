import { RESTDataSource } from "apollo-datasource-rest";

class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  getTracks() {
    return this.get("/").then((res) =>
      res.items.map((item: any) => ({
        ...item,
        id: item._id,
        albums: item.albumId,
        bands: item.bandsIds,
        artists: item.artistsIds,
      }))
    );
  }

  getTrack(id: string) {
    return this.get(`/${id}`);
  }
}

export const tracksService = new TracksService();
