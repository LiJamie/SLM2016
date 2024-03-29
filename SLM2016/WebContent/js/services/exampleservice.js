app.factory('ExampleService', ['$q', '$http', '$timeout', '$rootScope',
    function($q, $http, $timeout, $rootScope){
		
		var factory = this;

		// --------------------------------
        // 取得筆記文章列表
        // --------------------------------
        var getTest = function(type, starttime, endtime, start, len) {
            var defer = $q.defer();

            $http({
                url: "/SLM2016/hello",
                method: "GET",
                params: {
                    op: 1,
                    test: "test",
                    len: len
                }
            }).success(function(data) {
                if (data.error) {
                    defer.reject(data.error);
                } else {
                    defer.resolve(data);
                }
            }).error(function(data, status, headers, config) {
                console.error("status : " + status);
            });

            return defer.promise;
        }

		/*==========================
            Members
        ==========================*/

        /*==========================
            Methods
        ==========================*/

        factory.getTest = getTest;

        /*==========================
            init
        ==========================*/

        return factory;
    }
])