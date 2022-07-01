import { getObjectsByIds } from "../../../utils/getObjectsByIds";

export const tracksResolver = {
  Query: {
    tracks: (_: any, __: any, { dataSources }: any) =>
      dataSources.tracksService.getTracks(),
    track: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksService.getTrack(id),
  },
  Track: {
    bands: ({ bandsIds }: any, _: any, { dataSources }: any) => {
      if (bandsIds.length) {
        return getObjectsByIds(
          bandsIds,
          dataSources.bandsService.getBand.bind(dataSources.bandsService)
        );
      }
      return bandsIds;
    },
    artists: ({ artistsIds }: any, _: any, { dataSources }: any) => {
      if (artistsIds.length) {
        return getObjectsByIds(
          artistsIds,
          dataSources.artistsService.getArtist.bind(dataSources.artistsService)
        );
      }
      return artistsIds;
    },
    album: ({ albumId }: any, _: any, { dataSources }: any) => {
      dataSources.albumsService.getAlbum(albumId);
    },
  },
};
