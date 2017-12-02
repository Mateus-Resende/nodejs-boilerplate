let auth = require('../../auth/authorization');
let userDAO = require('../../persistent/userDAO');


let LoginController = function () {
    this.logIn = function(request, response){
        let data = request.body;
        let fail = function(){
            let errorMsg = 'Could not find user ' + data.username;
            console.log(errorMsg);
            response.status(403).send(errorMsg)
        };
        let success = function(user){
            let payload = {_id: user._id, role: user.role};
            let token = auth.signToken(payload);
            console.log('Returning token');
            response.status(200).json(token);
        };
        if(data && data.username && data.password) {
            console.log('Loging user ' + data.username);
            userDAO.getUserByEmailAndPassword(data, success, fail);
        }else{
            let errorMsg = 'required data not filled';
            console.log(errorMsg);
            console.log(data);
            response.status(403).send(errorMsg)
        }
    };
};

module.exports = new LoginController();