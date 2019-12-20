const express = require('express'),
    route = express.Router();//相当于app
// const { writeFile } = require('../utils/promiseFS');
const{success} = require('../utils/tools')

//=>用户登录
route.post('/login', (req, res) => {
    
    let {
        phone = '',
        password = ''
    } = req.body || {};
    // password = handleMD5(password);
    const item = req.$userDATA.find(item => {
        return (item.phone === phone) && item.password === password;
    });
    console.log(req.$userDATA)
    if (item) {
        req.session.userID = parseFloat(item.id);
        res.send(success(true));
        return;
    }
    res.send(success(false, {
        codeText: 'user name password mismatch!'
    }));
});
module.exports = route;