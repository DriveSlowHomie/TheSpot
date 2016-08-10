'use strict';
namespace SpotApp {
  angular.module('SpotApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider:  ng.ui.IUrlRouterProvider,
    uiGmapGoogleMapApiProvider: any) => {

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAU-rA_HwaG5ZTXLE5D8ieJVumBFkWaxAk',
    });

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: SpotApp.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('MarkPage', {
      url: '/markPage',
      templateUrl: '/templates/markPage.html',
      controller: SpotApp.Controllers.MarkPageController,
      controllerAs: 'vm'
    }).state('ExplorePage', {
      url: '/explorePage',
      templateUrl: '/templates/explorePage.html',
      controller: SpotApp.Controllers.ExplorePageController,
      controllerAs: 'vm'
    }).state('HitPage', {
      url: '/hitPage',
      templateUrl: '/templates/hitPage.html',
      controller: SpotApp.Controllers.HitPageController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  });
}
