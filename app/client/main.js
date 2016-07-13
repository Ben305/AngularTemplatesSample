import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import appModule from '/imports/client/app'

angular.module('sampleApp', [
  angularMeteor,
  uiRouter,

  appModule
]);