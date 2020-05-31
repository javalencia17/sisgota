import { EntidadResolver } from './Resolvers/EntidadResolver';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UsuarioResolver } from './Resolvers/UsuarioResolver';
import { createConnection } from 'typeorm';
import { RolResolver } from './Resolvers/RolResolver';


export const startServer = async () => {

    const app = express();
    await createConnection();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UsuarioResolver, RolResolver, EntidadResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    server.applyMiddleware({ app, path: '/graphql' })

    return app;
}
