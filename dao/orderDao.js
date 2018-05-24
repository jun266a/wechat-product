'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let orderDao = Object.assign({},iDao,{
	TABLE : iMysql.VIEWS.CARTS
});
module.exports = orderDao;
