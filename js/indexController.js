myApp.controller("indexController",function($scope,$http) {
	$scope.logined = 0;
	$scope.login = function() {
		$scope.userName = document.getElementById("userName").value;
		$scope.password = document.getElementById("password").value;
		if($scope.userName == undefined || $scope.userName =="") {
			alert("请输入用户名");
			return;
		}
		if($scope.password == undefined || $scope.password =="") {
			alert("请输入密码");
			return;
		}
		var formData = new FormData();
	    formData.append('userName', $scope.userName);
	    formData.append("password",$scope.password);
		$http({
			url:'http://182.92.226.65:8080/GXBike/api/user/login',
			method:'POST',
			headers: {
				'Content-Type': undefined
			},
			data:formData
		}).success(function(data,header,config,status){
			if(data.data == null) {
				alert("登录失败");
			} else {
				
			}
		}).error(function(data,header,config,status){
			
		});
	}
})