app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

    $stateProvider
        .state('posts', {
            url: '/posts',
            template: '<post-list></post-list>'
        })
        .state('postDetail', {
            url: '/posts/:id',
            template: '<post-detail></post-detail>'
        });

        $urlRouterProvider.otherwise("/posts");
 }]);

app.directive('postList', function() {
    return {
        restrict: 'E',
        templateUrl: 'apps/posts/client/views/post-list.html',
        controllerAs: 'vm',
        controller: 'PostListCtrl'
    }
});

app.directive('postDetail', function() {
    return {
        restrict: 'E',
        templateUrl: 'apps/posts/client/views/post-detail.html',
        controllerAs: 'vm',
        controller: 'PostDetailCtrl'
    }
});