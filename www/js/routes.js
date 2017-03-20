angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.1Semester', {
    url: '/semester1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1Semester.html',
        controller: '1SemesterCtrl'
      }
    }
  })

  .state('menu.2Semester', {
    url: '/semester2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2Semester.html',
        controller: '2SemesterCtrl'
      }
    }
  })

  .state('menu.3Semester', {
    url: '/semester3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3Semester.html',
        controller: '3SemesterCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.noteEingeben', {
    url: '/note_eingeben',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noteEingeben.html',
        controller: 'noteEingebenCtrl'
      }
    }
  })

  .state('menu.notenAnsehen', {
    url: '/notenansehen',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notenAnsehen.html',
        controller: 'notenAnsehenCtrl'
      }
    }
  })

  .state('menu.fCherVerwalten', {
    url: '/faecher_verwalten',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fCherVerwalten.html',
        controller: 'fCherVerwaltenCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/semester1')

  

});