'use strict';
namespace TheSpotApp {
  angular.module('TheSpotApp', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider:  ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: TheSpotApp.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('MarkPage', {
      url: '/markPage',
      templateUrl: '/templates/markPage.html',
      controller: TheSpotApp.Controllers.MarkPageController,
      controllerAs: 'vm'
    }).state('ExplorePage', {
      url: '/explorePage',
      templateUrl: '/templates/explorePage.html',
      controller: TheSpotApp.Controllers.ExplorePageController,
      controllerAs: 'vm'
    }).state('HitPage', {
      url: '/hitPage',
      templateUrl: '/templates/hitPage.html',
      controller: TheSpotApp.Controllers.HitPageController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
