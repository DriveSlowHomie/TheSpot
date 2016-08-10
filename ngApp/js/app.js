'use strict';
var SpotApp;
(function (SpotApp) {
    angular.module('SpotApp', ['ui.router', 'ngResource', 'ui.bootstrap'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQWlDaEI7QUFqQ0QsV0FBVSxPQUFPLEVBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkUsTUFBTSxDQUFDLFVBQ1IsY0FBb0MsRUFDcEMsaUJBQXVDLEVBQ3ZDLGtCQUE2QztRQUU3QyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYztZQUM5QyxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNuQixHQUFHLEVBQUUsV0FBVztZQUNoQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQjtZQUNsRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUN0QixHQUFHLEVBQUUsY0FBYztZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLHFCQUFxQjtZQUNyRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNsQixHQUFHLEVBQUUsVUFBVTtZQUNmLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCO1lBQ2pELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLEVBakNTLE9BQU8sS0FBUCxPQUFPLFFBaUNoQiJ9