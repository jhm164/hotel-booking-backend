import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// user defined imports
import { connectDB } from './config/database';
import graphUserSchema from "./Users/graphSchema";
import userReducer from "./Users/graphUserResolver";
import hotelSchema from "./Hotels/hotelSchema";
import hotelResolvers from "./Hotels/hotelResolvers";
import reviewSchema from './Reviews/graphReviewSchema'
import reviewResolver from './Reviews/graphReviewResolver'
import bookingSchema from './Bookings/graphBookingSchema'
import bookingResolver from './Bookings/graphBookingResolver'

async function startServer() {
// connect mongodb
  connectDB()


  const server = new ApolloServer({
    typeDefs: [graphUserSchema,hotelSchema,reviewSchema,bookingSchema],
    resolvers: [ userReducer,hotelResolvers,reviewResolver,bookingResolver ],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServer();
