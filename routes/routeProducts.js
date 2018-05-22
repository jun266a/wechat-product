'use strict';

const express = require('express');
const router = express.Router();

const productDao = require('../dao/productDao');
const catalogueView = require('../dao/catalogueView');

router.post('/insert',function(req,res){
	console.log(req.body);
	productDao.select({name:req.body.name},function(results){
		console.log(results.length);
		if(!results.length){
			productDao.insert(req.body,function(results){
				res.writeHead(200);   
				res.end('成功');
			});
		}else{
			res.writeHead(200); 
			res.end('不成功');
		}
	});
});
router.post('/all',function(req,res){
	catalogueView.all(function(results){
		if(results.length){
			res.writeHead(200);   
			res.end(JSON.stringify(results));
		}else{
			res.writeHead(200); 
			res.end('不成功');
		}
	});
});
router.post('/update',function(req,res){
	console.log(req.body);
	productDao.select({id :req.body.id},function(results){
		if(results.length){
			productDao.update(req.body,function(results){
				console.log(results);
				if(results){
					res.writeHead(200);   
					res.end('成功');
				}else{
					res.writeHead(200); 
					res.end('不成功');
				}
			});
		}
	});

});

module.exports = router;