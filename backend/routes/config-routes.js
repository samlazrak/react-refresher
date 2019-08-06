import rootRouter from './routers/root';
/**
 * initializes all routes
 * @param {Object} app the app instance
 */

const configRoutes = (app) => {
  app.use('/', rootRouter);
};

export default configRoutes;