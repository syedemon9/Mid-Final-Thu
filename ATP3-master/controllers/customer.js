var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
	userModel.getByUname(req.cookies['username'], function(result){
		res.render('homecustomer/index', {user: result});
	});
});

router.get('/view_users', function(req, res){
	
		userModel.getAll(function(results){
			if(results.length > 0){
				res.render('homecustomer/view_users', {userlist: results});
			}else{
				res.redirect('/customer');
			}
		});
});

router.get('/edit/:id', function(req, res){
	userModel.getById(req.params.id, function(result){
		res.render('homecustomer/edit', {user: result});
	});
});

router.post('/edit/:id', function(req, res){
	
		var user = {
			Eid: req.params.id,
			Ename: req.body.Ename,
			Cname: req.body.cname,
			ContractNo: req.body.ContractNo,
			username: req.body.username,
			password: req.body.password,
			Utid: req.body.type,
			jid:req.body.jid
		};

		userModel.update(user, function(status){
			if(status){
				res.redirect('/customer/view_users');
			}else{
				res.redirect('/customer/edit/'+req.params.id);
			}
		});
});

module.exports = router;