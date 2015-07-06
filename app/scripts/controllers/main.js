'use strict';

/**
 * @ngdoc function
 * @name quePrefieresApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quePrefieresApp
 */
angular.module('quePrefieresApp')
  .controller('MainCtrl', function ($scope) {
    $scope.totalScore = 0;
    $scope.counter = 0;

    $scope.isEnd = false;


    // Function to shuffle array
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    $scope.questions = [
      {
        q1: '¿No tener brazos?',
        q2: '¿No tener piernas?',
        score1: 1,
        score2: 1
      },
      {
        q1: '¿Salir con un/una famos@?',
        q2: '¿Salir con alguien que te guste?',
        score1: -1,
        score2: 1
      },
      {
        q1: '¿Ir al pasado a conocer a tus bis bis abuelos?',
        q2: '¿Ir al futuro tus bis bis nietos?',
        score1: 1,
        score2: -1
      },
      {
        q1: '¿Salvar a tu madre?',
        q2: '¿Salvar a tu padre?',
        score1: 1,
        score2: 1
      },
      {
        q1: '¿Salvar a tu mascota?',
        q2: '¿Salvar a un desconocido?',
        score1: -1,
        score2: 1
      },
      {
        q1: '¿Apretar un botón, matar a alguien en el mundo y ganar un millón de euros?',
        q2: '¿No hacerlo?',
        score1: -1,
        score2: 1
      }
    ];

    shuffle($scope.questions);

    $scope.question1 = $scope.questions[$scope.counter].q1;
    $scope.question2 = $scope.questions[$scope.counter].q2;



    // Controller to change to nextQuestion
    $scope.nextQuestion = function () {
      if ($scope.counter < $scope.questions.length - 1) {
        $scope.counter++;
        $scope.question1 = $scope.questions[$scope.counter].q1;
        $scope.question2 = $scope.questions[$scope.counter].q2;
        $scope.timer();
        //  This is a future bug
        if(!$scope.$$phase) {
          $scope.$apply();
        }
      } else {
        $scope.isEnd = true;
        $scope.stopClock();
        $scope.endGame();
      }
    };

    $scope.addScore1 = function () {
      if ($scope.isEnd === false) {
        $scope.totalScore += $scope.questions[$scope.counter-1].score1;
      }
    };

    $scope.addScore2 = function () {
      if ($scope.isEnd === false) {
        $scope.totalScore += $scope.questions[$scope.counter-1].score2;
      }
    };

    $scope.percentageScore = 0;
    console.log($scope.percentageScore);

    $scope.endGame = function () {


      $scope.percentageScore =  ($scope.totalScore / $scope.questions.length) * 100;
      $scope.typeOfPerson = 'No eres nadie';

      if ($scope.percentageScore >= 0 && $scope.percentageScore <= 33) {
          $scope.typeOfPerson = 'Eres Mar';
      } else if ($scope.percentageScore > 33 && $scope.percentageScore <= 66) {
          $scope.typeOfPerson = 'Regulín regulán';
      } else if ($scope.percentageScore > 66 && $scope.percentageScore <= 99) {
          $scope.typeOfPerson = 'Eres una buena persona';
      } else {
        $scope.typeOfPerson = '¡Vaya suerte tienes!';
      }

      console.log($scope.typeOfPerson);
      console.log($scope.percentageScore);
    };

    // Timer code
    $scope.countdownVal = 10;
    $scope.timerRunning = true;
    var timeStarted = false;

    $scope.startClock = function() {
      if (!timeStarted) {
          $scope.$broadcast('timer-start');
          $scope.timerRunning = true;
          timeStarted = true;
      } else if ((timeStarted) && (!$scope.timerRunning)) {
          $scope.$broadcast('timer-resume');
          $scope.timerRunning = true;
      }
    };

    $scope.stopClock = function() {
      if ((timeStarted) && ($scope.timerRunning)) {
          $scope.$broadcast('timer-stop');
          $scope.timerRunning = false;
      }
    };

    $scope.resetClock = function() {
      if ((!$scope.timerRunning)) {
          $scope.$broadcast('timer-reset');
      }
    };

    $scope.$on('timer-stopped', function(event, data) {   // jshint ignore:line
      timeStarted = true;
    });

    $scope.timer = function () {
      $scope.stopClock();
      $scope.resetClock();
      $scope.startClock();
    };

    //
    // $scope.finished = function () {
    //   console.log('hola');
    //   $scope.counter++;
    // };

  });
