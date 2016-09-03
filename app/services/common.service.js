(
    function () {
        'use strict';

        angular
        .module('app')
        .service('CommonService',commonService);

        function commonService() {
            // var title='';
            // var service = {
            //     setTitle: setTitle,
            //     getTitle: getTitle
            // };

            // return  service;

            // function setTitle(newValue) {
            //     title = newValue;
            // }

            // function getTitle() {
            //     return title;
            // }

            var service = {
                Title : ''
            };
            return service;
        }
    }
)();
