/**
 * Created by jura- on 10.06.2016.
 */
angular.module('FoodApp.main', ['ui.router'])
    .controller('MainCtrl', MainCtrl)
MainCtrl.$inject = ['$scope', '$rootScope', '$log'];
function MainCtrl($scope, $rootScope, $log) {
    var home = this;
    home.title = "Home";
}