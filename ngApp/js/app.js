'use strict';
var SpotApp;
(function (SpotApp) {
    angular.module('SpotApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
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
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQXNDaEI7QUF0Q0QsV0FBVSxPQUFPLEVBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDeEYsTUFBTSxDQUFDLFVBQ1IsY0FBb0MsRUFDcEMsaUJBQXVDLEVBQ3ZDLGtCQUE2QyxFQUM3QywwQkFBK0I7UUFFL0IsMEJBQTBCLENBQUMsU0FBUyxDQUFDO1lBQ25DLEdBQUcsRUFBRSx5Q0FBeUM7U0FDL0MsQ0FBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsR0FBRyxFQUFFLEdBQUc7WUFDUixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDOUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDbkIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0I7WUFDbEQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdEIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUI7WUFDckQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDbEIsR0FBRyxFQUFFLFVBQVU7WUFDZixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQjtZQUNqRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUM7UUFFSCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQXRDUyxPQUFPLEtBQVAsT0FBTyxRQXNDaEIifQ==