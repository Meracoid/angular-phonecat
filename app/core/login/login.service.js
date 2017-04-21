'use strict';

angular.
  module('core.login').
  factory('Login', ['$resource',
    function($resource) {
      return $resource('credentials/creds.json', {}, {
        query: {
          method: 'GET',
          params: {'creds': 'creds'},
          isArray: true
        }
      });
    }
  ]);
