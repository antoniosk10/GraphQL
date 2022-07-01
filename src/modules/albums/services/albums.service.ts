import { RESTDataSource } from "apollo-datasource-rest";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  getAlbums() {
    return this.get("/").then((res) =>
      res.items.map((item: any) => ({
        ...item,
        id: item._id,
        tracks: item.trackIds,
        bands: item.bandsIds,
        artists: item.artistsIds,
        genres: item.genresIds,
      }))
    );
  }

  getAlbum(id: string) {
    return this.get(`/${id}`);
  }
}

export const albumsService = new AlbumsService();
