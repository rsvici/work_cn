angular.module('shopinfoModule', [])
    .controller('shopinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams','$sce', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams,$sce) {

        $scope.shopInfo = shopVal //获取信息
        console.log($scope.shopInfo);
        $scope.shopInfo.content=$sce.trustAsHtml($scope.shopInfo.content)
        document.documentElement.scrollTop = 0;


        // 跳转到活动
        $scope.goActivelist = function () {
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wx.miniProgram.navigateTo({
                        url: '/pages/active/active?shopId=' + $scope.shopInfo.id
                    });
                }
            });

        };

        $scope.goMap = function () {
            var endsouth=$scope.shopInfo.longitude.split(',')[1];
            var endwest=$scope.shopInfo.longitude.split(',')[0];
            window.location.href = `./map/index.html?endsouth=${endsouth}&endwest=${endwest}`
        }


    }]);