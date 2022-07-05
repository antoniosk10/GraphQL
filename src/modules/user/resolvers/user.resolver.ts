export const userResolver = {
  Query: {
    user: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.userService.getUser(id),

    jwt: (
      _: any,
      { email, password }: { email: string; password: string },
      { dataSources }: any
    ) => dataSources.userService.jwt(email, password),
  },
  Mutation: {
    register: (_: any, { input }: any, { dataSources }: any) =>
      dataSources.userService.register(input),
  },
  User: {
    secondName: ({ lastName }: { lastName: String }) => lastName,
  },
};
