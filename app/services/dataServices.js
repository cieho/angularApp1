(
    function(){
        'use strict';
        angular.module('app')
        .service('dataService', dataService);

        dataService.$inject=['$resource','$http','CONSTANT_COMMON'];
        function dataService($resource,$http, CONSTANT_COMMON){
            var service = {
                getCategories: getCategories,
                getCategory: getCategory,
                addCategory: addCategory
            };
            return service;

            function getCategories(){
                //console.log('URL'+CONSTANT_COMMON.URL_SERVICE);
                return $http(
                    {
                        method: 'GET',
                        url: CONSTANT_COMMON.URL_SERVICE
                    }
                );
            }
            
            function getCategory(){
                //console.log('URL'+CONSTANT_COMMON.URL_SERVICE);
                return $http(
                    {
                        method: 'GET',
                        url: CONSTANT_COMMON.URL_SERVICE
                    }
                );
            }

            function addCategory(request){
                return $http(
                    {
                        method:'POST',
                        url:CONSTANT_COMMON.URL_SERVICE,
                        data: request
                    }
                );
            }
        }
    }
)();