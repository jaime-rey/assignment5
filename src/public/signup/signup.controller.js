(() => {
  "use strict";

  angular.module("public").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["MenuService"];
  function SignUpController(MenuService) {
    let $signUpCtrl = this;

    $signUpCtrl.submit = () => {
      MenuService.getFavoriteDish($signUpCtrl.user.favoriteDish).then(
        (response) => {
          $signUpCtrl.user.favDish = response.data;
          MenuService.setUserProfile($signUpCtrl.user);
          $signUpCtrl.success = true;
          $signUpCtrl.error = false;
        },
        (response) => {
          $signUpCtrl.success = false;
          $signUpCtrl.error = true;
        }
      );
    };
  }
})();
