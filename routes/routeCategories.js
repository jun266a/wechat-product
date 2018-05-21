'use strict';

const express = require('express');
const router = express.Router();

const categoryDao = require('../dao/categoryDao');

router.post('/insert',function(req,res){
	categoryDao.select(req.body,function(results){
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
router.post('/all',function(req,res){
	categoryDao.all(function(results){
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
	categoryDao.select({id :req.body.id},function(results){
		if(results.length){
			categoryDao.update(req.body,function(results){
				if(results.length){
					res.writeHead(200);   
					res.end(JSON.stringify(results));
				}else{
					res.writeHead(200); 
					res.end('不成功');
				}
			});
		}
	});
});

module.exports = router;