import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// user defined imports
import { connectDB } from './config/database';
import graphUserSchema from "./Users/graphSchema";
import userReducer from "./Users/graphUserResolver";

async function startServer() {
// connect mongodb
  connectDB()


  const server = new ApolloServer({
    typeDefs: [graphUserSchema],
    resolvers: [ userReducer ],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServer();
