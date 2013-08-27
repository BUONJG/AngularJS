'use strict';
    
onlineStatusApp.controller('onlineStatusCtrl', function OnlineStatusCtrl( $scope, onlineStatus ) {
    $scope.onlineStatus = onlineStatus;
    
    $scope.$watch('onlineStatus.isOnline()', function(online) {
        $scope.online_status_string = online ? 'online' : 'offline';
        $scope.online_status = online ? true : false;
    });
});