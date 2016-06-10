/**
 * Created by jura- on 10.06.2016.
 */
$.material.init();
angular
    .module ("FoodApp",
        [
            'ngRoute',
            'ui.router',
            'firebase',
            'Food.fitfire.service',
            'FoodApp.main',
            "FoodApp.delivery",
            'FoodApp.about',
            'FoodApp.admin'
        ])
    .constant('FIREBASE_URL','https://food-30b6c.firebaseio.com/')
    .config(Config);
Config.$inject = ["$stateProvider", "$urlRouterProvider"]
function Config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'home'
            })
            .state('delivery', {
                url: '/delivery',
                templateUrl: 'app/delivery/delivery.html',
                controller: 'DeliveryCtrl',
                controllerAs: 'delivery'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl',
                controllerAs: 'admin'
            });

    }
/**
 * Created by jura- on 10.06.2016.
 */
/**
 * Created by jura- on 19.05.2016.
 */
;(function () {
    'use strict';
    angular
        .module('Food.fitfire.service', ['firebase'])
        .service('fitfire', fitfire);
    fitfire.$inject = ['$log', 'FIREBASE_URL', '$firebaseObject', '$firebaseArray'];
    function fitfire($log, FIREBASE_URL, $firebaseObject, $firebaseArray) {
        var self = this;
        var ref = new Firebase(FIREBASE_URL);
        var refObj = $firebaseObject(ref);
        var FoodRef = ref.child('Food');
        var FoodArr = $firebaseArray(FoodRef);
        this.GetFood = function (cb) {
           return FoodArr.$loaded(cb);
        };
    }
})()
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