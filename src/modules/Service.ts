import { RESTDataSource } from "apollo-datasource-rest";
import { Pagination } from "./types";

class Service extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  getItems(pagination: Pagination) {
    return this.get("", { ...pagination }).then((res) => res.items);
  }

  getItem(id: string) {
    return this.get(`/${id}`);
  }

  createItem(input: object) {
    return this.post(
      "",
      { ...input },
      {
        headers: {
          authorization: this.context.token,
        },
      }
    );
  }

  updateItem(id: string, input: object) {
    return this.put(
      `/${id}`,
      { ...input },
      {
        headers: {
          authorization: this.context.token,
        },
      }
    );
  }

  deleteItem(id: string) {
    return this.delete(
      `/${id}`,
      {},
      {
        headers: {
          authorization: this.context.token,
        },
      }
    );
  }

  getItemsByIds(arrayIds: Array<string>) {
    return Promise.allSettled(
      arrayIds.map((id: string) => this.getItem(id))
    ).then((res) =>
      res.map((item) => (item as unknown as PromiseFulfilledResult<any>).value)
    );
  }
}

export { Service };
