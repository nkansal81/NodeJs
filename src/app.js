const express = require('express');
const cors = require('cors');
const initRoutes = require('./modules');
const app = express();

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
