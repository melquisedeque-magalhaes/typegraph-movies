import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server'

import './utils/connection'

import { CategoryResolver } from "./graphql/category/CategoryResolver";
import { VideoResolver } from "./graphql/video/VideoResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [CategoryResolver, VideoResolver]
    })

    const server = new ApolloServer({
        schema
    })

    server.listen({ port: 3333 }, () => console.log('Server is Running 🚀'))
}

bootstrap()