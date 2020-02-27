var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from customer where Cid=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from customer";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM customer where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname: function(username, callback){
		var sql = "select * from customer where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		console.log(user.Fname + user.Lname+ user.username+user.password+ user.Email+ user.Phone + user.Utid);
		var sql = "insert into customer values(?,?,?,?,?,?,?,?)";
		db.execute(sql, [null, user.Fname, user.Lname, user.username,user.password, user.Email, user.Phone,user.Utid], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	userinsert: function(user, callback){
		console.log(user.Fname + user.Lname+ user.username+user.password+ user.Email+ user.Phone + user.Utid);
		var sql = "insert into customer values(?,?,?,?,?,?,?,?)";
		db.execute(sql, [null, user.Fname, user.Lname, user.username,user.password, user.Email, user.Phone,user.Utid], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	
	/*update : function(user, callback){
		var sql = "update customer set Fname=?,Lname=?,username=?, password=?, Email=?, Phone=?,Utid=? where Cid=?";
		db.execute(sql, [user.Fname, user.Lname, user.username,user.password, user.Email, user.Phone,user.Utid,user.Cid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/
	update : function(user, callback){
		var sql = "update customer set Fname=?,Lname=?,username=?,pasword=?,Email=?, Phone=? where Utid=?";
		db.execute(sql, [user.Fname,user.Lname,user.username,user.password,user.Email,user.Phone,user.Utid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from customer where Cid=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}