import express, { Express } from 'express'

export const app : Express = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://serpapi.com/search.json"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', function(req, res, next) {
    res.json({
        statusCode : res.statusCode
    })
    });

const port = 8100

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
})