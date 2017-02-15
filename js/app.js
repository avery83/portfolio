

var app = angular.module('portfolio',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
     $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.html"
    })
    .when("/resume", {
        templateUrl : "partials/resume.html"
    })
    .when("/classes", {
        templateUrl : "partials/classes.html"
    })
    .when("/projects", {
        templateUrl : "partials/projects.html"
    })
    .when("/aboutMe", {
        templateUrl : "partials/aboutMe.html"
    });
});
