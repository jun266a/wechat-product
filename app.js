'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routeCategories = require('./routes/routeCategories');
const routeCompanies = require('./routes/routeCompanies');


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//app.use(cookieParser());
app.use(express.static('./webapp'));

//路由处理
app.use('/categories',routeCategories);
app.use('/companies',routeCompanies);
app.listen(80,function(err){
	if(err){
		console.log(err);
	}
	console.log("server is started!");
});
