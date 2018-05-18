'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let productDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.PRODUCT
});
module.exports = productDao;
