/*
 * @Descripttion: 
 * @Version: 
 * @Author: rsvici
 * @Date: 2019-01-29 19:30:16
 */
angular.module('shoplistModule', [])
    .controller('shoplistCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', '$window', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams, $window) {

        $scope.businessId = 'xinhongqiao';
        $scope.shopList = hotBusinessList[$scope.businessId];




        $scope.goBusiness = function (num) {
            $state.go('hotbusiness')
        };


        $scope.goShopInfo = function (shopItem) {
            console.log(shopItem)
            $state.go('shopinfo', {
                shopItemId: shopItem.id
            })
        };

        $scope.goMap = function () {
            window.location.href = './map/'
        }

        $scope.pageSize = 8;
        $scope.pageNo = 1;
        $scope.isMoreGet = true;
        // 获取商圈中的商场
        $scope.getTradingAreaList = function (type) {
            $http({
                url: adminUrl + "tradingArea/list",
                params: {
                    type: type,
                    isShoppingMall: 0,
                    pageSize: $scope.pageSize,
                    pageNo: $scope.pageNo
                },
                method: 'get'
            }).then(function (res) {
                if (res.data.data.parameterType.length < 3) {
                    $scope.isMoreGet = false;
                }
                if ($scope.pageNo > 1) {
                    $scope.shopList=$scope.shopList.concat(res.data.data.parameterType)
                } else {
                    $scope.pageNo=2;
                    $scope.shopList = res.data.data.parameterType;
                }
            }, function (error) {

            })
        }
        $scope.getTradingAreaList($stateParams.businessId)

        $window.onscroll = function () {
            if ($('.list')[0].scrollHeight - ($window.outerHeight + $window.pageYOffset) < 100) {
                if (!$scope.isMoreGet) {
                    return;
                }
                $scope.pageSize = 4;
                $scope.pageNo++;
                $scope.getTradingAreaList($stateParams.businessId)
            }
        }



    }]);