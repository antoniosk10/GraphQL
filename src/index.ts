import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { resolvers } from "./modules/artists/resolvers/artists.resolver";
import { artistsService } from "./modules/artists/services/artists.service";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: await loadFiles("src/**/*.graphql"),
    resolvers: [resolvers],
    dataSources: () => {
      return {
        artistsService,
      };
    },
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
