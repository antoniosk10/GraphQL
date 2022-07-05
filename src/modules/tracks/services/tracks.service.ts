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
        album: item.albumId,
        bands: item.bandsIds,
        artists: item.artistsIds,
        genres: item.genresIds,
      }))
    );
  }

  getTrack(id: string) {
    return this.get(`/${id}`);
  }

  getTracksByIds(arrayIds: Array<string>) {
    return Promise.allSettled(arrayIds.map((id: string) => this.getTrack(id)));
  }
}

export const tracksService = new TracksService();
