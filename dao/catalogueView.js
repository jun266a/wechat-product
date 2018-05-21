'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let catalogueView = Object.assign({},iDao,{
	TABLE : iMysql.VIEWS.CATALOGUE
});
module.exports = catalogueView;