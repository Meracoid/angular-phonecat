'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('cart').
  component('cart', {
    templateUrl: 'cart/cart.template.html',
    controller: ['Login',
      function CartController(Login) {
        var self = this;
        var stored = localStorage['user'];
        self.user;
        if(stored) {
            self.user = JSON.parse(stored);
        } else {
            window.alert("PLEASE LOGIN TO USE THIS FEATURE.");
            window.location.replace("/#!/login");
        }

      }
    ]
  });
