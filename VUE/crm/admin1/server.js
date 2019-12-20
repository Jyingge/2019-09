const CONFIG = require('./config'),
    session = require('express-session'),
    bodyParser = require('body-parser')


/* CREATE SERVER */

const express = require('express'),
    app = express();
app.listen(CONFIG.PORT, () => {
    console.log(`当前服务 起于${CONFIG.PORT}端口`);
})

/* MIDDLE WARE */
app.use((req, res, next) => {
    const {
        ALLOW_ORIGIN,
        CREDENTIALS,
        ALLOW_METHODS,
        HEADERS
    } = CONFIG.CROS;
    res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
    res.header("Access-Control-Allow-Credentials", CREDENTIALS);
    res.header("Access-Control-Allow-Headers", HEADERS);
    res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
    req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
    extended: false
}));

/*-QUERY DATA-*/
const {
    readFile
} = require('./utils/promiseFS');
const {
    filterInvalid
} = require('./utils/tools');

app.use(async (req, res, next) => {
    //把读取的数据放到请求信息上
    req.$userDATA = filterInvalid(JSON.parse(await readFile('./json/user.json')));
    req.$classifyDATA = filterInvalid(JSON.parse(await readFile('./json/classify.json')));
    next();
});

/*-ROUTE-*/
app.use('/user', require('./routers/user'));
app.use((req, res) => {
    res.status(404);
    res.send('NOT FOUND!');
});