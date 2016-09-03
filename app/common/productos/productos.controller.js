(
    function(){
        'use strict';
        angular
            .module('app')
            .controller('ProductoController', productoController);
        
        productoController.$inject = ['CommonService'];
        function productoController(CommonService){
            var vm = this;
            //vm.titulo = CommonService.getTitle();
            vm.titulo = CommonService.title;
        }
    }
)();