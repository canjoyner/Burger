var orm = require("../config/orm.js");

var burger = {

	all: function(cb){
		orm.all("burger",function(res){
			cb(res);
			console.log(res)
		});
	}
}

module.exports = burger;