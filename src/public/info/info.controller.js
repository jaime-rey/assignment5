(() => {
  "use strict";

  let infoController = function (MenuService, ApiPath) {
    let vm = this;
    vm.apiPath = ApiPath;

    vm.signedUp = false;

    vm.user = MenuService.getUser();
    console.log("User is", vm.user);
    if (angular.equals(vm.user, {})) {
      vm.signedUp = false;
    } else {
      vm.signedUp = true;
    }
  };

  infoController.$inject = ["MenuService", "ApiPath"];
  angular.module("public").controller("InfoController", infoController);
})();
