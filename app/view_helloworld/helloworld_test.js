describe('suite of tests for hello world', function () {
    describe('another suite', function () {
        var controller;
        var User;
        beforeEach(module('myApp.helloworld'));
        beforeEach(inject(function ($controller, _User_) {
            User = _User_;
            var $scope = {};
            controller = $controller('HelloWorldController', { $scope: $scope });
        }));


        it('should have a message of Hello World!', function () {
            expect(controller.message).toBe('Hello World!');
        });

       xit('should have a data property equal to empty!', function () {
            expect(controller.data).toBe('asdf');
        });
    });
});