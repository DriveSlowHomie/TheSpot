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



    constructor() {

      // navigator.geolocation.getCurrentPosition(showPosition);
      //
      // function showPosition(position) {
      //     console.log("lat:"+position.coords.latitude)
      //  	console.log("lat:"+position.coords.longitude)
      // }

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
