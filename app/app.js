(
    function(){
        'use strict';
        var app = angular.module('app', ['ui.router','ngResource']);
        app.config(
            function($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state("home", {
                        url: "/home",
                        templateUrl: 'app/common/home/home.html'
                    })
                    .state("producto", {
                        url: "/producto",
                        templateUrl: 'app/common/productos/productos.html',
                        controller: 'ProductoController',
                        controllerAs: 'vm'
                    })
            }
        );
    }
)();