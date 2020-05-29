import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PingResolver } from './Resolvers/ping';
import { buildSchema } from 'type-graphql';
import { UsuarioResolver } from './Resolvers/UsuarioResolver';
import { createConnection } from 'typeorm';


export const startServer = async () => {

    const app = express();
    await createConnection();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, UsuarioResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    server.applyMiddleware({ app, path: '/graphql' })

    return app;
}
