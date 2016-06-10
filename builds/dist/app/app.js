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
            'FoodApp.main',
            "FoodApp.delivery",
            'FoodApp.about'
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
            });

    }
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
MainCtrl.$inject = ['$scope', '$rootScope', '$log'];
function MainCtrl($scope, $rootScope, $log) {
    var home = this;
    home.title = "Home";
}