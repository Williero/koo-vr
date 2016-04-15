angular.module('KooMusicApp')
    .controller('MusicController', function ($scope, $location) {
        // QUERY DATABASE AND ATTACH INFO TO SCOPE
        // $scope.contacts = Contact.query();
        // $scope.fields = ['firstName', 'lastName'];

        // show Method on NGCLICK redirects to route
        // $scope.show = function (id) {
        //     $location.url('/contact/' + id);
        // }
    });
    // .controller('NewController', function ($scope, Contact, $location) {
    //     $scope.contact = new Contact({
    //         firstName: ['', 'text'],
    //         lastName: ['', 'text'],
    //         email: ['', 'email'],
    //         homePhone: ['', 'tel'],
    //         cellPhone: ['', 'tel'],
    //         birthday: ['' , 'date'],
    //         website: ['', 'url'],
    //         address: ['', 'text']
    //     });
    //     $scope.save = function () {
    //         if ($scope.newContact.$invalid) {
    //             $scope.$broadcast('record:invalid');
    //         } else {
    //             $scope.contact.$save();
    //             $location.url('/contacts');
    //         }
    //     };
    // })
    // .controller('SingleController', function ($scope, $location, Contact, $routeParams) {
    //     $scope.contact = Contact.get({ id: parseInt($routeParams.id, 10) });
    //     $scope.delete = function () {
    //         $scope.contact.$delete();
    //         $location.url('/contacts');
    //     };
    // });