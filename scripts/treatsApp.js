'use strict';

angular.module('treats', ['restangular'])
    .config(function ($locationProvider, RestangularProvider) {
        // prevent adding hash onto end of query string
        $locationProvider.html5Mode(true).hashPrefix('!');
        RestangularProvider.setBaseUrl('/api');
    });