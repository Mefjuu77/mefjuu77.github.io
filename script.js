const app = angular.module('portfolioApp', []);

app.controller('MainController', function($scope) {
  $scope.name = "Mateusz Struszczyk";
  $scope.email = "mateusz.struszczyk@gmail.com";

  $scope.about = "Jestem pasjonatem tworzenia stron internetowych, skupiając się na czytelnym i estetycznym designie.";

  $scope.skills = ["HTML5", "CSS3", "JavaScript"];

  $scope.projects = [
    { name: "ToDo App", description: "Lista zadań stworzona w czystym JS" },
    { name: "Portfolio", description: "Strona OnePage z użyciem AngularJS" }
  ];

  $scope.github = "https://github.com/Mefjuu77"; // <-- podmień na swój login!
});
