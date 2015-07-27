'use strict';
/**
 * @ngdoc function
 * @name quePrefieresApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the quePrefieresApp
 */
angular.module('quePrefieresApp')
  .controller('StartCtrl', function ($scope, $window, sharedData) {

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
        q1: '¿Ir al pasado a conocer a tus bis bis abuelos?',
        q2: '¿Ir al futuro a conocer a tus bis bis nietos?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Salvar a tu mascota?',
        q2: '¿Salvar a un desconocido?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Tener 3 deseos pero no poder pedir dinero?',
        q2: '¿Tener un 10 millones de euros?',
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
        q2: 'Decir siempre medio-verdades?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Sacrificarte para salvar la vida a 100.000 desconocidos sin saber ellos que les has salvado la vida?',
        q2: '¿Vivir pero que todo el mundo sepa que no diste tu vida por esos 100.000 desconocidos?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Que la gente tuviese un respeto sobrecogedor por ti?',
        q2: '¿Tener poder y reconocimiento?',
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
        q2: '¿Insultar a alguien que tuviese un mal día todos los días?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Decir siempre lo que se te pase por la cabeza?',
        q2: '¿Nunca decir lo que en verdad piensas?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Volver al pasado y matar a Hitler antes del Holocausto?',
        q2: '¿Revivir 5 personas muertas a tu elección?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Ser fe@ pero inteligente?',
        q2: '¿Ser guap@ pero tont@?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Que el alchohol o las drogas no te afectasen negativamente?',
        q2: '¿Que la comida insana fuese súper sana y nutritiva?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Salvar a una persona que conoces de una muerte segura?',
        q2: '¿Salvar a 1.000 desconocidos que nunca conocerás de una muerte segura?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Acabar con el hambre en el mundo?',
        q2: '¿Ser inmortal?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Tener sexo con una celebridad de tu elección aún estando casado?',
        q2: '¿O no hacerlo?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Nunca llegar bien a fin de mes pero conocer a tu media naranja?',
        q2: '¿Ser extremadamente rico pero no llegar a conocer a tu media naranja?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Estar siempre bien de dinero?',
        q2: '¿Estar siempre bien emocionalmente?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Tener un trabajo muy aburrido pero bien pagado?',
        q2: '¿Tener un trabajo muy interesante pero mal pagado?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Ser un prolífico y poco conocido científico que ayuda a millones de personas con sus descubrimientos?',
        q2: '¿Ser un actor/actriz guap@, famos@ y ric@ que sólo participa en roles triviales?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Aumentar la esperanza de vida de todo el mundo en 10 años a costa de perder la mitad de tus años de vida restantes?',
        q2: '¿Poder parar el tiempo a conciencia pero reducir tu esperanza de vida a la mitad?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Que alguien aleatorio se convirtiese adicto a la heroína?',
        q2: '¿Estar dos semanas consumiendo heroína a sabiendas que te podrías volver adicto?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Poder revertir un asesinato cualquiera cada día?',
        q2: '¿Poder revertir una decisión tuya cada día?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Ganar 50.000€?',
        q2: '¿Que tu mejor amig@ gane 500.000€, sin poder repartir el premio?',
        score1: 0,
        score2: 1
      },
      {
        q1: '¿Salvar a un niño en peligro, pero ser catalogado como pedófilo?',
        q2: '¿Dejar que el niño muera pero que todo el mundo piense que eres un héroe por haberlo intentado salvar?',
        score1: 1,
        score2: 0
      },
      {
        q1: '¿Poder hablar con los muertos?',
        q2: '¿Poder prevenir muertes?',
        score1: 0,
        score2: 1
      }
    ];

    // Randomize the output of the questions
    shuffle($scope.questions);

    // Question variables
    $scope.question1 = $scope.questions[$scope.counter].q1;
    $scope.question2 = $scope.questions[$scope.counter].q2;

    // Service to assign the total number of questions, so it can get accessed in end.js
    $scope.setTotalQuestions = sharedData.setTotalQuestions($scope.questions.length);
    $scope.totalQuestions = sharedData.getTotalQuestions();

    // Controller to change to nextQuestion
    $scope.nextQuestion = function () {
      // If there are enought questions on the array, iterate throught them
      if ($scope.counter < $scope.questions.length - 1) {
        // Iteration throught the questions
        $scope.counter++;

        // Binding the questions in order to use it in expressions
        $scope.question1 = $scope.questions[$scope.counter].q1;
        $scope.question2 = $scope.questions[$scope.counter].q2;

        // Full reset timer
        $scope.timer();

        //  This is a future bug
        if(!$scope.$$phase) {
          $scope.$apply();
        }
      } else {
        // $scope.isEnd = true;
        $scope.stopClock();
        $window.location.href = '#/end';
      }
    };

    // Assigning the totalScore variable from sharedData
    $scope.totalScore = sharedData.getTotalScore();

    // Function to add score in case user press the question 1 button
    $scope.addScore1 = function () {
      if (!$scope.isEnd) {
        // This updates the var totalScore from the service sharedData using the function addTotalScore
        $scope.totalScore = sharedData.addTotalScore($scope.questions[$scope.counter-1].score1);
      }
    };

    // Function to add score in case user press the question 2 button
    $scope.addScore2 = function () {
      if (!$scope.isEnd) {
        // Same as addScore1
        $scope.totalScore = sharedData.addTotalScore($scope.questions[$scope.counter-1].score2);
      }
    };

    // Timer code
    $scope.countdownVal = 45;
    var timerRunning = true;
    var timeStarted = false;

    $scope.startClock = function() {
      if (!timeStarted) {
          $scope.$broadcast('timer-start');
          timerRunning = true;
          timeStarted = true;
      } else if ((timeStarted) && (!timerRunning)) {
          $scope.$broadcast('timer-resume');
          timerRunning = true;
      }
    };

    $scope.stopClock = function() {
      if ((timeStarted) && (timerRunning)) {
          $scope.$broadcast('timer-stop');
          timerRunning = false;
      }
    };

    $scope.resetClock = function() {
      if ((!timerRunning)) {
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

    // Button cursor highlight
    $(function() {
			var originalBGplaypen = $('.question').css('background-color'),
			    x, y, xy, bgWebKit, bgMoz,
			    lightColor = 'rgba(93, 158, 232, 0.52)',
			    gradientSize = 200;

				// Basic Demo
				$('.question').mousemove(function(e) {

					x  = e.pageX - this.offsetLeft;
					y  = e.pageY - this.offsetTop;
					xy = x + ' ' + y;

					bgWebKit = '-webkit-gradient(radial, ' + xy + ', 0, ' + xy + ', ' + gradientSize + ', from(' + lightColor + '), to(rgba(255,255,255,0.0))), ' + originalBGplaypen;
					bgMoz    = '-moz-radial-gradient(' + x + 'px ' + y + 'px 45deg, circle, ' + lightColor + ' 0%, ' + originalBGplaypen + ' ' + gradientSize + 'px)';

					$(this)
						.css({ background: bgWebKit })
						.css({ background: bgMoz });

				}).mouseleave(function() {
					$(this).css({ background: originalBGplaypen });
				});
    });
});
