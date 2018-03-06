// My sql connection

var connection = require("../config/connection.js");


var orm = {

all: function(burger_name,cb){

	var queryString = "SELECT * FROM" + burger_name +";";
	connection.query(queryString,function(err,result){
		if (err){
			throw err;
		}
		cb(result);
	});
}




// insertOne: function(){};



// updateOne: function(){};



}


module.exports = orm;
