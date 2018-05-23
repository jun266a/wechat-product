'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routeCategories = require('./routes/routeCategories');
const routeCompanies = require('./routes/routeCompanies');
const routeProducts = require('./routes/routeProducts');
const routeAdmin = require('./routes/routeAdmin');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//app.use(cookieParser());
app.use(express.static('./webapp'));

//路由处理
app.use('/admin',routeAdmin);
app.use('/products',routeProducts);
app.use('/companies',routeCompanies);
app.use('/categories',routeCategories);

app.listen(80,function(err){
	if(err){
		console.log(err);
	}
	console.log("server is started!");
});
