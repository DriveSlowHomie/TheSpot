var SpotApp;
(function (SpotApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal) {
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.showModal = function () {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: '/templates/dialog.html',
                    controller: 'DialogController',
                    controllerAs: 'vm',
                    resolve: {
                        dataFromHomeController: function () { return _this.email; }
                    },
                    size: 'sm'
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('SpotApp').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController(dataFromHomeController, $uibModalInstance) {
                this.dataFromHomeController = dataFromHomeController;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        angular.module('SpotApp').controller('DialogController', DialogController);
        var MarkPageController = (function () {
            function MarkPageController() {
                this.center = { latitude: 37.09024, longitude: -100.712891 };
                this.zoom = 4;
            }
            return MarkPageController;
        }());
        Controllers.MarkPageController = MarkPageController;
        var ExplorePageController = (function () {
            function ExplorePageController() {
            }
            return ExplorePageController;
        }());
        Controllers.ExplorePageController = ExplorePageController;
        var HitPageController = (function () {
            function HitPageController() {
            }
            return HitPageController;
        }());
        Controllers.HitPageController = HitPageController;
    })(Controllers = SpotApp.Controllers || (SpotApp.Controllers = {}));
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0E4RGhCO0FBOURELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQThENUI7SUE5RGlCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFFN0I7WUFhRSx3QkFBb0IsU0FBNkM7Z0JBQTdDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1lBQ2pFLENBQUM7WUFaRCxrQ0FBUyxHQUFUO2dCQUFBLGlCQVVDO2dCQVRDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNsQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQixFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVU7cUJBQ3pDO29CQUNELElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUM7WUFHSCxxQkFBQztRQUFELENBQUMsQUFmRCxJQWVDO1FBZlksMEJBQWMsaUJBZTFCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUl2RTtZQUlFLDBCQUFtQixzQkFBc0IsRUFDOUIsaUJBQTZEO2dCQURyRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQUE7Z0JBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEM7WUFDeEUsQ0FBQztZQUxELDZCQUFFLEdBQUY7Z0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFJSCx1QkFBQztRQUFELENBQUMsQUFQRCxJQU9DO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUkzRTtZQU9FO2dCQUxPLFdBQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLENBQUM7Z0JBQ3ZELFNBQUksR0FBRyxDQUFDLENBQUM7WUFNaEIsQ0FBQztZQUNILHlCQUFDO1FBQUQsQ0FBQyxBQVZELElBVUM7UUFWWSw4QkFBa0IscUJBVTlCLENBQUE7UUFHRDtZQUVFO1lBRUEsQ0FBQztZQUNILDRCQUFDO1FBQUQsQ0FBQyxBQUxELElBS0M7UUFMWSxpQ0FBcUIsd0JBS2pDLENBQUE7UUFFRDtZQUdFO1lBRUEsQ0FBQztZQUNILHdCQUFDO1FBQUQsQ0FBQyxBQU5ELElBTUM7UUFOWSw2QkFBaUIsb0JBTTdCLENBQUE7SUFFSCxDQUFDLEVBOURpQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQThENUI7QUFBRCxDQUFDLEVBOURTLE9BQU8sS0FBUCxPQUFPLFFBOERoQiJ9