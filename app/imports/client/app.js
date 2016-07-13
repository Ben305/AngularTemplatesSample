import angular from 'angular';
import router from 'angular-ui-router';

const moduleName = 'app';

angular
  .module(moduleName, [
    router
  ])
  .config(routeConfig);

function routeConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
        views: {
          'main@': {
            templateUrl: '/packages/layout-package/layout.html',
            //template: '<div ui-view="content"></div>'
          }
        }
     })
    .state('app.home', {
      url: '/',
      views: {
        'content@app': {
          template: 'Content from app.home'
        }
      }
    });
}

export default moduleName;