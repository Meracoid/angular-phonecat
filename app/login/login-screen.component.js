'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('login').
  component('login', {
    templateUrl: 'login/login-screen.template.html',
    controller: ['$routeParams', 'Login',
      function LoginController($routeParams, Login) {
        var self = this;

        self.login = function login(){
           return Login.get('cred', function(res) {
            var success = res.username === self.username && res.password === self.password;
            if(success){
                window.alert("Login Successful");
                var user = {
                    "username": "admin",
                    "password": "password",
                    "cart": [],
                };
                localStorage['user'] = JSON.stringify(user);
                window.location.replace('/#!/phones');
            } else if(success === false) {
                window.alert("Incorrect Username/Password");
                window.location.replace('/#!/login');
            }else{
                window.alert("Issues");
            }
          });
        };
    }
  ]});
