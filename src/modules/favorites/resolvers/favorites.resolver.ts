import { TypeFavoriteItem } from "../favorites.types";

export const favoritesResolver = {
  Query: {
    favourites: (_: any, __: any, { dataSources }: any) =>
      dataSources.favoritesService.getFavorites(),
  },

  Mutation: {
    addTrackToFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.addItem(id, TypeFavoriteItem.tracks),
    addBandToFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.addItem(id, TypeFavoriteItem.bands),
    addArtistToFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.addItem(id, TypeFavoriteItem.artists),
    addGenreToFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.addItem(id, TypeFavoriteItem.genres),
    deleteTrackFromFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.deleteItem(id, TypeFavoriteItem.tracks),
    deleteBandFromFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.deleteItem(id, TypeFavoriteItem.bands),
    deleteArtistFromFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.deleteItem(id, TypeFavoriteItem.artists),
    deleteGenreFromFavourites: (
      _: any,
      { id }: { id: string },
      { dataSources }: any
    ) => dataSources.favoritesService.deleteItem(id, TypeFavoriteItem.genres),
  },

  Favourites: {
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
