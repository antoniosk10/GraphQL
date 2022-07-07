import { Pagination } from "../../types";
import { InputAlbum } from "../albums.types";

export const albumsResolver = {
  Query: {
    albums: (
      _: any,
      { pagination }: { pagination: Pagination },
      { dataSources }: any
    ) => dataSources.albumsService.getItems(pagination),
    album: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.albumsService.getItem(id),
  },
  Mutation: {
    createAlbum: (
      _: any,
      { input }: { input: InputAlbum },
      { dataSources }: any
    ) => dataSources.albumsService.createItem(input),
    deleteAlbum: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.albumsService.deleteItem(id),
    updateAlbum: (
      _: any,
      { id, input }: { id: string; input: InputAlbum },
      { dataSources }: any
    ) => dataSources.albumsService.updateItem(id, input),
  },
  Album: {
    id: ({ _id }: { _id: string }) => _id,
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.getItemsByIds(bandsIds),
    artists: (
      { artistsIds }: { artistsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.artistsService.getItemsByIds(artistsIds),
    tracks: (
      { tracksIds }: { tracksIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.tracksService.getItemsByIds(tracksIds),
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getItemsByIds(genresIds),
  },
};
