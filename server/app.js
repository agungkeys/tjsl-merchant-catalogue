/*eslint no-undef: "error"*/
/*eslint-env node*/
// server.js
const { createServer } = require('http');
const { parse } = require('url');
const nextApp = require('next');
const nextServerWrapper = require('../nextServerWrapper');
const express = require('express');
/** constants */
const ROUTES = require('../constants/routes');

/** routes */
const api = require('./api');
// const routesProduct = require('./routes/product');
// const routesMerchant = require('./routes/merchant');
// const routesContent = require('./routes/content');
// const routesPromotion = require('./routes/promotion');
// const routesAccount = require('./routes/account');
// const routesOrder = require('./routes/order');
// const routeConfiguration = require('./routes/configuration');
// const routeUser = require('./routes/user');
// const routePrescription = require('./routes/prescription');
// const routeReview = require('./routes/review');
// const routeSitemaps = require('./routes/sitemaps');
// const routeFormularium = require('./routes/formulariums');

// const cors = require('cors');
// const newrelic =
//   process.env.NODE_ENV === 'production' && process.env.ENV === 'production'
//     ? require('newrelic')
//     : null;

const app = nextApp({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const port = process.env.port || 3000;
const server = express();

app.prepare().then(() => {
	server.use(nextServerWrapper(app));
  //server.use(ROUTES.API.route, api);
  /** Home landing page */
  server.get(ROUTES.INDEX.route, (req, res) => {
    app.render(
      req,
      res,
      ROUTES.INDEX.href,
      Object.assign(req.query, req.params)
    );
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

	server.use((req, res) => {
    res.status(404);
    req.app.render(req, res, '/_error');
  });

  server.use((error, req, res) => {
    res.status(500);
    req.app.render(req, res, '/_error');
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('Server running on port:', port);
  });
});
