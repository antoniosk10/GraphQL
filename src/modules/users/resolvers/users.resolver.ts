export const userResolver = {
  Query: {
    user: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksService.getTrack(id),
  },
};
