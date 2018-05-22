'use strict';

const express = require('express');
const router = express.Router();

const adminDao = require('../dao/adminDao');

router.post('/select',function(req,res){
	adminDao.select({adminId : req.body.adminId},function(results){
		if(results[0].pwd == req.body.pwd){
			res.writeHead(200);   
			res.end(JSON.stringify({
				id : results[0].id
			}));
		}else{
			res.writeHead(200); 
			res.end('不成功');
		}
	});
});

module.exports = router;