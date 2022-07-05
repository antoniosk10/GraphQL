import { RESTDataSource } from "apollo-datasource-rest";
import { Pagination } from "../../types";
import { InputAlbum } from "../albums.types";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  getAlbums(pagination: Pagination) {
    return this.get("", { ...pagination }).then((res) => res.items);
  }

  getAlbum(id: string) {
    return this.get(`/${id}`);
  }

  createAlbum(input: InputAlbum) {
    return this.post("", { ...input });
  }

  updateAlbum(id: string, input: InputAlbum) {
    return this.put(`/${id}`, { ...input });
  }

  deleteAlbum(id: string) {
    return this.delete(`/${id}`);
  }
}

export const albumsService = new AlbumsService();
