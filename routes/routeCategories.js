'use strict';

const express = require('express');
const router = express.Router();

const categoryDao = require('../dao/categoryDao');

router.post('/addcategories',function(req,res){
	categoryDao.select(req.body,function(results){
		console.log('length '+results.length);
		if(!results.length){
			categoryDao.insert(req.body,function(results){
				res.writeHead(200);   
				res.end('成功');
			});
		}else{
			res.writeHead(200); 
			res.end('不成功');
		}
	});
});

module.exports = router;