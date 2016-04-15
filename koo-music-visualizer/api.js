var express = require('express'),
    bodyParser = require('body-parser'),
    router = express.Router();

router
    .use(function (req, res, next) {
        next();
    })
    .use(bodyParser.json())
    .route('/')
        .get(function (req, res) {});

router
    .use(function (req, res, next) {
        next();
    })
    .use(bodyParser.json())
    .route('/:emotion')
        .get(function (req, res) {});

module.exports = router;




