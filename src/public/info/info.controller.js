(() => {
  "use strict";

  angular.module("public").controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ["userInfo"];
  function MyInfoController(userInfo) {
    let $myInfoCtrl = this;
    $myInfoCtrl.user = userInfo;
  }
})();
