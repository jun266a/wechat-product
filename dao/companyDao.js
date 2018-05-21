'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let companyDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.COMPANY
});
module.exports = companyDao;
