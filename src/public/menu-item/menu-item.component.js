(() => {
  "use strict";

  angular.module("public").component("menuItem", {
    templateUrl: "src/public/menu-item/menu-item.html",
    bindings: {
      menuItem: "<",
    },
    controller: MenuItemController,
  });

  MenuItemController.$inject = ["ApiPath"];
  function MenuItemController(ApiPath) {
    let $ctrl = this;
    $ctrl.basePath = ApiPath;
  }
})();
