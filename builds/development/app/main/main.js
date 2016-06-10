/**
 * Created by jura- on 10.06.2016.
 */
angular.module('FoodApp.main', ['ui.router'])
    .controller('MainCtrl', MainCtrl)
MainCtrl.$inject = ['$scope', '$rootScope', '$log', 'fitfire'];
function MainCtrl($scope, $rootScope, $log, fitfire) {
    var home = this;
    home.title = "Home";
    fitfire.GetFood(function (_d) {
        home.food = _d;
        $log.debug(home.food);
    });

}