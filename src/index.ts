import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
import express from "express";
import http from "http";
import resolvers from "./modules/resolvers";
import services from "./modules/services";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: await loadFiles("src/**/*.graphql"),
    resolvers,
    dataSources: () => services,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req }) => {
      const token = req.headers.authorization;
      return { token };
    },
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => {
    httpServer.listen({ port: process.env.PORT || 3000 }, resolve);
  });
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
}

startApolloServer();
