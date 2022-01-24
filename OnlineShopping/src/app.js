const express = require('express');
const cors = require('cors');
const initRoutes = require('./modules');
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const  {swaggerDocument} = require('./swagger.json');

// const swaggerDefinition = {
//     openapi: '3.0.0',
//     info: {
//       title: 'Express API for JSONPlaceholder',
//       version: '1.0.0',
//     },
//     servers:["https://localhost:8080"]
// };
  
// const options = {
//     swaggerDefinition,
//     // Paths to files containing OpenAPI definitions
//     // apis: ['./routes/*.js'],
//     apis: ['app.js'],
// };

// const swaggerSpec = swaggerJSDoc(options);
  
const app = express();

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json({
    extended: true
}));

app.use(cors());

const router = express.Router();

app.use((req,res,next) => {
    res.setHeader("Content-Type","application/json");
    next();
});
 
app.use('/api/v1',router);

initRoutes(router);

module.exports = {
    app,
    router
}
