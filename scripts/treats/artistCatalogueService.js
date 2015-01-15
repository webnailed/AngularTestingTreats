'use strict';
angular.module('treats')
    .service('artistCatalogueService', function (Restangular) {
        var baseArtists = Restangular.all('artists');
        return {
            getArtists: function() {
                return baseArtists.getList();
            }
        };
    });