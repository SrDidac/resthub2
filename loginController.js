User = require('./userModel');
exports.login = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
// save the contact and check for errors
    User.findOne({name:user.name},function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
        {
        	console.log(user);
        	console.log(req.body);
            res.json({message: 'Login correcto!', data:user});
        }
    });
};