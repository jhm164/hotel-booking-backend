import express, { Request, Response } from 'express';
import { connectDB } from './config/database';
import userRouter from "./Users/userRoutes";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import hotelTypeDef from './Hotels/schema';
import hotelResolver from './Hotels/resolvers';
import graphUserResolver from './Users/graphUserResolver';
import graphUserSchema from './Users/graphSchema';

dotenv.config();
const startServer = async () => {
  const app: any = express();
  await connectDB();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/users", userRouter);

 const server:any = new ApolloServer({ typeDefs:[graphUserSchema,hotelTypeDef], resolvers:[hotelResolver,graphUserResolver]  });
  // server.start().then(()=>{
    await server.start()
    await  server.applyMiddleware({ app });
  // })

  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, async() => {
    console.log(`gql path is ${server.graphqlPath}`);
    console.log(`Server is running http://localhost:${PORT}`);
  });
};

startServer().catch((error:any) => {
  console.error("Server failed to start", error);

});
