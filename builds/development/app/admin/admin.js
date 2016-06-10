/**
 * Created by jura- on 11.06.2016.
 */
angular.module('FoodApp.admin', ['ui.router'])
    .controller('AdminCtrl', AdminCtrl)
AdminCtrl.$inject = ['$scope', '$rootScope', '$log', 'fitfire'];
function AdminCtrl($scope, $rootScope, $log, fitfire) {
    var admin = this;
    admin.title = "Admin";
    fitfire.GetFood(function (_d) {
        admin.food = _d;
    });

}