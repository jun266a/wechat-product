'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let adminDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.ADMIN
});
module.exports = adminDao;