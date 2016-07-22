import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import appModule from '/imports/client/app';

import '/imports/client/include.html';

angular.module('sampleApp', [
  angularMeteor,
  uiRouter,

  appModule
]);