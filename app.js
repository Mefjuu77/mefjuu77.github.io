var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.lang = 'pl';

  const translations = {
    pl: {
      aboutTitle: "O mnie",
      aboutText: "Cześć! Jestem Mateusz, interesuję się Ekonomią, Motorsportem oraz rynkiem krypto. W wolnym czasie lubię zagrać w grę komputerową lub wybrać się na rower. Jestem otwarty na nowe wyzwania i nowe znajomości!",

      educationTitle: "Wykształcenie",
      education1: "2019 - 2022: Liceum Ogólnokształcące im. Marii Dąbrowskiej w Komorowie",
      education2: "2022 - Obecnie: SGGW w Warszawie – Informatyka (studia inżynierskie)",

      experienceTitle: "Doświadczenie",
      experienceText: "Posiadam 4-letnie doświadczenie w branży e-commerce, obejmujące analizę danych, rozwój procesów sprzedażowych online oraz optymalizację operacji handlu elektronicznego.",

      skillsTitle: "Umiejętności",
      skill1: "Programowanie: C#, Python – podstawy",
      skill2: "Technologie webowe: HTML, CSS, JavaScript",
      skill3: "Obsługa pakietu MS Office, Git, Jira",
      skill4: "Języki: Angielski – B2, Polski – ojczysty",
      skill5: "Elastyczność, praca zespołowa, komunikatywność",

      contactTitle: "Kontakt"
    },
    en: {
      aboutTitle: "About Me",
      aboutText: "Hi! I'm Mateusz. I'm interested in Economics, Motorsport, and the crypto market. In my free time, I enjoy gaming or going for a bike ride. I'm always open to new challenges and connections!",

      educationTitle: "Education",
      education1: "2019 – 2022: Maria Dąbrowska High School in Komorów",
      education2: "2022 – Present: Warsaw University of Life Sciences – Computer Science (Engineering Studies)",

      experienceTitle: "Experience",
      experienceText: "I have 4 years of experience in the e-commerce sector, including data analysis, online sales process development, and operational optimization.",

      skillsTitle: "Skills",
      skill1: "Programming: C#, Python – basic",
      skill2: "Web technologies: HTML, CSS, JavaScript",
      skill3: "Tools: MS Office, Git, Jira",
      skill4: "Languages: English – B2, Polish – native",
      skill5: "Adaptability, teamwork, communication",

      contactTitle: "Contact"
    }
  };

  $scope.t = translations[$scope.lang];

  $scope.changeLang = function () {
    $scope.t = translations[$scope.lang];
  };

  $scope.setLang = function (code) {
    $scope.lang = code;
    $scope.changeLang();
  };
 
$scope.showCookiePopup = !localStorage.getItem('cookiesAccepted');


$scope.acceptCookies = function () {
  localStorage.setItem('cookiesAccepted', true);
  $scope.showCookiePopup = false;
};

});
