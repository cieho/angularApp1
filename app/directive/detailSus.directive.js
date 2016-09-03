(
    function(){
        'use script';

        angular.module('app')
        .directive('detailCategory',detailCategory)

        function detailCategory(){
             return {
                restrict: 'E',
                controller: directiveController,
                scope:{
                    id : '=', //= double binding, & functions, @only text
                    name : '=',
                    bstatus: '='
                },
                templateUrl: 'app/directive/detailSus.html'
            };
        }
        directiveController.$inject=['$scope'];
        function directiveController($scope){
            $scope.addCat = addCat;

            function addCat(){
                console.log('adding');
            }
        }
    }
)();
