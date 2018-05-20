'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let subscribeDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.SUBSCRIBE
});
module.exports = subscribeDao;
