/*
 * @Descripttion: 
 * @Version: 
 * @Author: rsvici
 * @Date: 2019-01-29 19:30:16
 */
angular.module('nineModule', [])
    .controller('nineCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.matrixObj = []
        $scope.getMatrixList = function () {
            $http({
                url: adminUrl + "matrixList/list",
                params: {
                    pageSize: 1000,
                    pageNo:1
                },
                method: 'get'
            }).then(function (res) {
                $scope.matrixObj = res.data.data.parameterType
                console.log($scope.matrixObj)
            }, function (error) {

            })
        }
        $scope.getMatrixList()



        $scope.goBusiness = function () {
            $state.go('hotbusiness')
        };
    }]);