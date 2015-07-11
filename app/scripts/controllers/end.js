'use strict';
/**
 * @ngdoc function
 * @name quePrefieresApp.controller:EndCtrl
 * @description
 * # EndCtrl
 * Controller of the quePrefieresApp
 */
angular.module('quePrefieresApp')
  .controller('EndCtrl', function ($scope) {
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
  });
