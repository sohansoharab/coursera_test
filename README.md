# coursera_test
Angular JS test Practice
    
    ############
    ## app.js ##
    ############
    
    // 'MainPageApp' is the Angular App name
    // 'MainPageController' is the controller of it, where the same name also denotes the controlling function
    
    // Injecting special deliverables/objects/objects manually helps to protect the controller during minification.

    // Keywords having '$' are special deliverables in Angular
    // '$scope' acts as the 'self' in python function/OOP classes
    // Everything under this app goes inside the controller function

    ###################
    ## filter_app.js ##
    ###################

    angular.module('filterApp', [])
    .controller('filterAppController', filterAppController)
    .filter('Custom', CustomFilterFactory);

    // To use custom filters, First we need to define a custom filter factory function below the controller function
    // Then we need to register this factory function like above, 
    // By default in [.filter('Custom'),..], Angular automatically adds Filter keyword end of the word 'Custom',
    // In case of using the filter in HTML, syntax is {{ msg | Cutom }}
    // So, during the injection, we need to use ['Custom' + 'Filter'] = 'CustomFilter'
    // We also need to pass it as argument to controller function to use it 

    filterAppController.$inject = ['$scope', '$filter', 'CustomFilter'];

    function filterAppController ($scope, $filter, CustomFilter) { .. }