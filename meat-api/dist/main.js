"use strict";
exports.__esModule = true;
var restify = require("restify");
var server = restify.createServer({
    name: "meat-api",
    version: "1.0.0"
});
server.use(restify.plugins.queryParser());
server.get("/info", [
    function (req, res, next) {
        var error = new Error();
        error.statusCode = 400;
        error.message = "Please, update your browser";
        return next(error);
    },
    function (req, res, next) {
        res.json({
            browser: req.userAgent(),
            method: req.method,
            url: req.href(),
            path: req.path(),
            query: req.query
        });
        return next();
    }
]);
server.listen(3000, function () {
    console.log("API is running on http://localhost:3000");
});
