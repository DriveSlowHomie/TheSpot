namespace SpotApp.Controllers {

  export class HomeController {
    public email;
    showModal(){
      this.$uibModal.open({
        templateUrl: '/templates/dialog.html',
        controller: 'DialogController',
        controllerAs: 'vm',
        resolve: {
          dataFromHomeController: () => this.email
        },
        size: 'sm'
      });
    }
    constructor(private $uibModal: angular.ui.bootstrap.IModalService) {
    }
  }
  angular.module('SpotApp').controller('HomeController', HomeController);



  class DialogController {
    ok(){
      this.$uibModalInstance.close();
    }
    constructor(public dataFromHomeController,
       private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance){
    }
  }
  angular.module('SpotApp').controller('DialogController', DialogController);



  export class MarkPageController {

    // public initMap() {
    //     var mapDiv = document.getElementById('map');
    //     var map = new google.maps.Map(mapDiv, {
    //         center: {lat: 44.540, lng: -78.546},
    //         zoom: 8
    //     });
    //   }

    constructor() {

    }
  }

  export class ExplorePageController {

    constructor() {

    }
  }

  export class HitPageController {


    constructor() {

    }
  }

}
