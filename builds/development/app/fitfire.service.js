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