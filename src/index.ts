import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';
const app = express();
const port = 9000;

const server = new ApolloServer({ schema });
server.applyMiddleware({app, path: '/api'});


app.listen(port, () => {
    console.log(`Server started at [app]: http://localhost:${port}`);
})