'use strict';

const express = require('express');
const router = express.Router();

const companyDao = require('../dao/companyDao');

router.post('/all',function(req,res){
	companyDao.all(function(results){
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