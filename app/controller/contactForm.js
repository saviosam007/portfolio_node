/**
 * Created by SavioJoseph on 9/14/2016.
 */
(function () {
    'use strict';
    angular.module('myApp.controllers')
        .controller('contactFormController', ['$scope', '$timeout', '$http', 'toaster', function ($scope, $timeout, $http, toaster) {
            $scope.sendMessage = true;
            $scope.submitContactForm = function () {
                console.log($scope.sentMessage);
                if($scope.sentMessage.$invalid){
                    toaster.pop('warning', "Please check the inputs");
                    $scope.notValid=true;
                    return;
                }
                if ($scope.sendMessage) {
                    toaster.pop('success', "Sending Message.....");
                }
                var data = ({
                    contactName: $scope.contact.name,
                    contactEmail: $scope.contact.email,
                    contactPhone: $scope.contact.phone,
                    contactMessage: $scope.contact.message
                });
                var url = window.location.origin + "/sendEmail";
                $http.post(url, data).success(function (data) {
                    $scope.sendMessage = false;
                    toaster.pop('success', "Message Sent Successfully !!");
                    $scope.messageSuccess=true;
                    $scope.contact = {};
                })
                    .error(function (data) {
                        toaster.pop('warning', "Please Enter a Valid Email Address");
                    })

            }
        }]);

})();