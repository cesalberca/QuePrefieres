'use strict';
/**
 * @ngdoc function
 * @name quePrefieresApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the quePrefieresApp
 */
angular.module('quePrefieresApp')
  .controller('StartCtrl', function ($scope) {
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

    // Array of the questions and its properties
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
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Ir al pasado a conocer a tus bis bis abuelos?',
        q2: '¿Ir al futuro a conocer a tus bis bis nietos?',
        score1: 1,
        score2: 0
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
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Tener 3 deseos pero no poder pedir dinero?',
        q2: '¿Tener un billón de euros?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Viajar al pasado y cambiar algo personal?',
        q2: '¿Viajar al pasado y cambiar el curso de la historia?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Decir siempre la verdad?',
        q2: 'Contar siempre mentiras?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Encontrar el amor verdadero?',
        q2: '¿Ganar la lotería?',
        score1: 1,
        score2: 0
      },
      {
        q1: 'Sacrificarte para salvar la vida a 100.000 desconocidos sin saber ellos que les has salvado la vida?',
        q2: '¿Vivir pero que todo el mundo sepa que no diste tu vida por esos 100.000 desconocidos?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Que la gente tuviese un respeto sobrecogedor por ti?',
        q2: '¿Tener poder ilimitado?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Morir feliz en 5 años?',
        q2: '¿Morir infeliz en 60 años?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Oler a mierda y no saberlo?',
        q2: '¿Oler mierda constantemente que nadie más puede oler?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Ser insultado todos los días?',
        q2: '¿Insultar a alguien a quien quieres todos los días?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Decir siempre lo que se te pase por la cabeza?',
        q2: '¿Nunca decir lo que en verdad piensas?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Volver al pasado y matar a Hitler antes del Holocausto?',
        q2: '¿Revivir 5 personas muertas a tu elección?',
        score1: 1,
        score2: 0
      }
    ];

    shuffle($scope.questions);

    // Question variables
    $scope.question1 = $scope.questions[$scope.counter].q1;
    $scope.question2 = $scope.questions[$scope.counter].q2;
    $scope.totalQuestions = $scope.questions.length;

    // Controller to change to nextQuestion
    $scope.nextQuestion = function () {
      // If there are enought questions on the array, iterate throught them
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

    // Function to add score in case user press the question 1 button
    $scope.addScore1 = function () {
      if ($scope.isEnd === false) {
        $scope.totalScore += $scope.questions[$scope.counter-1].score1;
      }
    };

    // Function to add score in case user press the question 2 button
    $scope.addScore2 = function () {
      if ($scope.isEnd === false) {
        $scope.totalScore += $scope.questions[$scope.counter-1].score2;
      }
    };

    // Score module
    $scope.percentageScore = 0;

    $scope.endGame = function () {

      // Percentage of the score
      $scope.percentageScore =  ($scope.totalScore / $scope.questions.length) * 100;
      $scope.typeOfPerson = '';

      // Score calculator
      if ($scope.percentageScore >= 0 && $scope.percentageScore <= 10) {
          $scope.typeOfPerson = 'Estás vací@ por dentro';
      } else if ($scope.percentageScore > 10 && $scope.percentageScore <= 20) {
          $scope.typeOfPerson = 'No eres alguien que presentaría a mis padres, ni a nadie.';
      } else if ($scope.percentageScore > 20 && $scope.percentageScore <= 30) {
          $scope.typeOfPerson = 'Hay atisbos de esperanza, pero aún así eres alguien con un corazón podrido.';
      } else if ($scope.percentageScore > 30 && $scope.percentageScore <= 40) {
          $scope.typeOfPerson = 'No me jodas, o te jodo. Bueno, de hecho te voy a joder. Ese es tu lema por la vida.';
      } else if ($scope.percentageScore > 40 && $scope.percentageScore <= 50) {
          $scope.typeOfPerson = 'Casi casi eres medio persona, ¡sigue intentándolo, proyecto de ser humano!';
      } else if ($scope.percentageScore > 50 && $scope.percentageScore <= 60) {
          $scope.typeOfPerson = 'Aprobado raspado. Un poco peor y serías de los malos. O eso te crees tú.';
      } else if ($scope.percentageScore > 60 && $scope.percentageScore <= 70) {
          $scope.typeOfPerson = 'En fin, alguien un pelín decente tendría que haber después de todo. Me refería a mi, tú sigues siendo del montón.';
      } else if ($scope.percentageScore > 70 && $scope.percentageScore <= 80) {
          $scope.typeOfPerson = '¿Por qué has mentido en las preguntas? Bueno... Supongo que te tendré que creerte, nadie mentiría por internet, ¿no? Quizás seas algo decente.';
      } else if ($scope.percentageScore > 80 && $scope.percentageScore <= 90) {
          $scope.typeOfPerson = 'Bueno, bueno, aquí el ser moral superior, que sepas que eso te baja puntos, creíd@.';
      } else if ($scope.percentageScore > 90 && $scope.percentageScore <= 100) {
          $scope.typeOfPerson = 'Ni yo consigo esta puntuación, así que asumiré que has hecho trampas o has tenido mucha mucha suerte, suerte que necesitarás para que no te dé de palos por romperme el juego.';
      }

      // Working on final score display
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

    // Full cycle reset timer
    $scope.timer = function () {
      if (!$scope.isEnd) {
        $scope.stopClock();
        $scope.resetClock();
        $scope.startClock();
      }
    };

  });
