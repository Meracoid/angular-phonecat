'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.addToCart = function addToCart(item) {
          var stored = localStorage['user'];
          var user;
          if (stored){
           user = JSON.parse(stored);
          } else {
            window.alert("YOU MUST LOGIN TO USE FEATURE. REDIRECT TO LOGIN");
            window.location.replace("/#!/login");
            return;
          }
          user.total += item.price;
          window.alert("Item added to cart");
          user.cart.unshift(item);
          localStorage['user'] = JSON.stringify(user);
        }
      }
    ]
  });
