'use strict';

/**
 * @ngdoc overview
 * @name quePrefieresApp
 * @description
 * # quePrefieresApp
 *
 * Main module of the application.
 */
angular
  .module('quePrefieresApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timer'
  ])
  .service('totalQuestions', function () {
    var totalQuestions = 0;

    return {
      getTotalQuestions: function () {
        return totalQuestions;
      },

      setTotalQuestions: function(value) {
        totalQuestions = value;
      }
    };
  })
  .service('totalScore', function () {
    var totalScore = 0;

    return {
      getTotalScore: function () {
        return totalScore;
      },

      setTotalScore: function(value) {
        totalScore = value;
      }
    };
  })

  // .factory('TotalScore', function(){
  //   var Score = {
  //     totalScore: 0
  //   };
  //   return {
  //     getScore: function() {
  //       return Score;
  //     },
  //   };
  // })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/start', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      })
      .when('/end', {
        templateUrl: 'views/end.html',
        controller: 'EndCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
