app.controller('PostListCtrl', ['$scope', '$reactive', function ($scope, $reactive) {
    $reactive(this).attach($scope);

    this.newPost = {};

    this.helpers({
        posts: () => Posts.find({})
    });

    this.createPost = function() {
        Posts.insert(this.newPost)
    };
}]);