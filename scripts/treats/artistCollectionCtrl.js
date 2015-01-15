'use strict';

angular.module('treats')
    .controller('artistCollectionCtrl', ['$scope', 'artistCatalogueService', function($scope, artistCatalogueService) {
        artistCatalogueService.getArtists().then(function(artists) {
            $scope.artists = artists;
        }, function(error) {
            $scope.error = error;
        })
    }]);
