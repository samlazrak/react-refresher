import express from 'express';
import server from './schema';
import bodyParser from 'body-parser';
import cors from 'cors';
import configRoutes from './routes/config-routes';

const app = express();

// Middleware: bodyparser & cors
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(cors());

// Middleware: GraphQL
server.applyMiddleware({
  app: app,
});

// Express: Port
const port = process.env.PORT || 4000;

// Express: configure routes
configRoutes(app);

// Express: Listener
app.listen(port, () => {
  console.log(`🚀  The server has started on port: ${port}`);
  console.log(`http://localhost:${port}${server.graphqlPath}`);
});

app.post('/', (req, res) => {});

export default app;
