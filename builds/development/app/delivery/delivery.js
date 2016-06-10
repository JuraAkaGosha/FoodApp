/**
 * Created by jura- on 10.06.2016.
 */
angular.module('FoodApp.delivery', ['ui.router'])
    .controller('DeliveryCtrl', DeliveryCtrl)
DeliveryCtrl.$inject = ['$scope', '$rootScope', '$log'];
function DeliveryCtrl($scope, $rootScope, $log) {
    var delivery = this;
    delivery.title = "Delivery";
}