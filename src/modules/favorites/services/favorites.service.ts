import { RESTDataSource } from "apollo-datasource-rest";
import { TypeFavoriteItem } from "../favorites.types";

class FavoritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVORITES_URL;
  }

  getFavorites() {
    return this.get(
      "",
      {},
      {
        headers: {
          authorization: this.context.token,
        },
      }
    );
  }

  addItem(id: string, type: TypeFavoriteItem) {
    return this.put(
      "add",
      { type, id },
      {
        headers: {
          authorization: this.context.token,
        },
      }
    );
  }

  deleteItem(id: string, type: TypeFavoriteItem) {
    return this.put(
      "remove",
      { type, id },
      {
        headers: {
          authorization: this.context.token,
        },
      }
    );
  }
}

export const favoritesService = new FavoritesService();
