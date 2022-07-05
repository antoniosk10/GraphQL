import { RESTDataSource } from "apollo-datasource-rest";

class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  getGenres() {
    return this.get("/").then((res) =>
      res.items.map((item: any) => ({
        ...item,
        id: item._id,
      }))
    );
  }

  getGenre(id: string) {
    return this.get(`/${id}`);
  }

  getGenresByIds(arrayIds: Array<string>) {
    return Promise.allSettled(arrayIds.map((id: string) => this.getGenre(id)));
  }
}

export const genresService = new GenresService();
