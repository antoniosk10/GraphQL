import { Artist } from "../../artists/artists.types";
import { InputBand, Members } from "../bands.types";

export const bandsResolver = {
  Query: {
    bands: (_: any, __: any, { dataSources }: any) =>
      dataSources.bandsService.getItems(),
    band: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bandsService.getItem(id),
  },

  Mutation: {
    createBand: (
      _: any,
      { input }: { input: InputBand },
      { dataSources }: any
    ) => dataSources.bandsService.createItem(input),
    deleteBand: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bandsService.deleteItem(id),
    updateBand: (
      _: any,
      { id, input }: { id: string; input: InputBand },
      { dataSources }: any
    ) => dataSources.bandsService.updateItem(id, input),
  },

  Band: {
    id: ({ _id }: { _id: string }) => _id,
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getItemsByIds(genresIds),
    members: (
      { members }: { members: Members },
      _: any,
      { dataSources }: any
    ) =>
      Promise.allSettled(
        members.map(({ artist }: { artist: string }) =>
          dataSources.artistsService.getItem(artist)
        )
      ).then((res) =>
        res.map((item, index) => {
          const { value } = item as unknown as PromiseFulfilledResult<Artist>;
          return {
            firstName: value.firstName,
            secondName: value.secondName,
            middleName: value.middleName,
            instrument: members[index].instrument,
            years: members[index].years,
          };
        })
      ),
  },
};
