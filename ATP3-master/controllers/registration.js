var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


/*router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});*/

router.get('/', function(req, res){
	res.render('home/index');
});
router.post('/adduser', function(req, res){
	var user = {
		
		Fname: req.body.Fname,
		Lname: req.body.Lname,
		//ContactNo: req.body.ContactNo,
		username: req.body.username,
		password: req.body.password,
		Email: req.body.Email,
		Phone: req.body.Phone,
		Utid: req.body.Utid,
	
	};
	userModel.insert(user, function(status){
	
			if(status){
				res.redirect('/login/index');
			}else{
				res.redirect('/admin');
			}
		});

	});	

router.get('/', function(req, res){
	userModel.getByUname(req.cookies['username'], function(result){
		res.render('Reg/index', {user: result});
	});
});
