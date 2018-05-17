'use strict';

const sha = require('sha1');
const express = require('express');
const wechat = require('node-wechat');
const router = express.Router();

let app = express();

app.set('views','/webapp');
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static('/webapp'));




//路由处理
app.use('/index',index);
app.use('/users',users);
app.use('/wechat',wechat);

app.listen(80,function(err){
	if(err){
		console.log(err);
	}
	console.log("server is started!");
});


