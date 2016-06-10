/**
 * Created by jura- on 10.06.2016.
 */
angular.module('FoodApp.about', ['ui.router'])
    .controller('AboutCtrl', AboutCtrl)
AboutCtrl.$inject = ['$scope', '$rootScope', '$log'];
function AboutCtrl($scope, $rootScope, $log) {
    var about = this;
    about.title = "About";
}