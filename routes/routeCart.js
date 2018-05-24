'use strict';

const express = require('express');
const router = express.Router();

const orderDao = require('../dao/orderDao');

router.post('/select',function(req,res){
	console.log(req.body);
	orderDao.select(req.body,function(results){
		console.log(results);
		if(results.length){
			res.writeHead(200);   
			res.end(JSON.stringify(results));
		}else{
			res.writeHead(200); 
			res.end('不成功');
		}
	});
});

module.exports = router;