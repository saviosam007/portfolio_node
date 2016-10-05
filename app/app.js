'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    "myApp.controllers"
]);
angular.module('myApp.data', []);
angular.module('myApp.services', ['myApp.data']);
angular.module('myApp.directives', ['myApp.services']);
angular.module('myApp.controllers', [ 'ngAnimate',
    'toaster']);
