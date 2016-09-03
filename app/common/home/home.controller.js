(
    function(){
        'use strict';
        angular.module('app')
        .controller('HomeController',homeController);

        homeController.$inject=['dataService','$window', '$state', 'CommonService'];

        function homeController(dataService,$window,$state, CommonService){
            var vm = this;
            vm.TituloHome = 'List of Categories';
            vm.addCategory = addCategory;
            vm.irProductos = irProductos;

            function init(){
                vm.CatList = [];
                var categoriesList = dataService.getCategories();
                //console.log(categoriesList);
                categoriesList.then(
                    function(res){
                        //console.log(res.data.datos);
                        vm.CatList = res.data.datos;
                    }
                );
            }

            function addCategory(){
                console.log(vm.name);
                var categoryEntidad =JSON.stringify({
                    //id: vm.id,
                    name: vm.name
                });

                dataService.addCategory(categoryEntidad).then(
                    function success(response){
                        //console.log(response);
                        $window.location.reload();
                    },
                    function error(err){
                        console.log(err);
                    }
                );
            }

            function irProductos(){
                //CommonService.setTitle('En hora buena');
                CommonService.title='Hola Mundo';
                $state.go('producto');
            }
            init();
        }
    }
)();