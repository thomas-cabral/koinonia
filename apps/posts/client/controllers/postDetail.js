app.controller('PostDetailCtrl', ['$scope', '$reactive', '$stateParams', function ($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    this.post_id = $stateParams._id;

    this.helpers({
        post: () => Posts.findOne({_id: $stateParams.id})
    })
}]);