const path = require('path');
const express = require('express');
const httpError = require('http-errors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('../routes/index.route');
const config = require('./config');
const passport = require('./passport')

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

// Choose what fronten framework to serve the dist from
var distDir = '../../dist/';
if (config.frontend == 'react'){
  distDir ='../../node_modules/material-dashboard-react/dist'
 }else{
  distDir ='../../dist/' ;
 }

// 
app.use(express.static(path.join(__dirname, distDir)))
app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

console.log(distDir);
 //React server
app.use(express.static(path.join(__dirname, '../../node_modules/material-dashboard-react/dist')))
app.use(/^((?!(api)).)*/, (req, res) => {
res.sendFile(path.join(__dirname, '../../dist/index.html'));
}); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors({
  allRoutes: true,
  allowOrigins: [
    // 'https://pebblar.com',
    // 'https://staging.pebblar.com',
    'http://localhost:4200', // For local dev
    // 'http://localhost:3001', // For local dev
    // 'http://localhost:5000', // For local dev
    // 'http://localhost:8080', // For PDF
    // 'https://www.pebblar.com',
    // 'https://freemium.pebblar.com',
    // 'https://freemium-dev.firebaseapp.com',
    // 'https://freemium-staging.firebaseapp.com',
    // 'https://freemium-193908.firebaseapp.com',
    // 'https://freemium-devtw.firebaseapp.com',
    // 'https://booming-monitor-216204.firebaseapp.com',
    // 'https://pdf-dot-freemium-dev.appspot.com',
    // 'https://pdf-dot-freemium-staging.appspot.com',
    // 'https://pdf-dot-freemium-193908.appspot.com',
    // 'https://pdf-dot-freemium-devtw.appspot.com',
    // 'https://pdf-dot-booming-monitor-216204.appspot.com',
    // 'https://mobile-dot-freemium-193908.appspot.com',
    // 'https://mobile-dot-freemium-staging.appspot.com',


    //'https://5157cd2a.ngrok.io',
  ],
  allowCredentials: true,
  allowRequestHeaders: 'content-type,authorization',
},));
// // Cross Origin middleware
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })

app.use(passport.initialize());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API router
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404)
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {

  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map(e => e.message).join("; ");
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message
  });
  next(err);
});

module.exports = app;
