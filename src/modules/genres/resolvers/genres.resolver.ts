import { Pagination } from "../../types";
import { InputGenre } from "../genres.types";

export const genresResolver = {
  Query: {
    genres: (
      _: any,
      { pagination }: { pagination: Pagination },
      { dataSources }: any
    ) => dataSources.genresService.getItems(pagination),
    genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.genresService.getItem(id),
  },

  Mutation: {
    createGenre: (
      _: any,
      { input }: { input: InputGenre },
      { dataSources }: any
    ) => dataSources.genresService.createItem(input),
    deleteGenre: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.genresService.deleteItem(id),
    updateGenre: (
      _: any,
      { id, input }: { id: string; input: InputGenre },
      { dataSources }: any
    ) => dataSources.genresService.updateItem(id, input),
  },
};
