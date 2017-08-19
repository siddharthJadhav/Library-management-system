

 angular.module('constants', [])

.constant('APP_REQUIRES', {library:[{name:'icons',files:['assets/vendor/modernizr/modernizr.js']},{name:'modernizr',files:['assets/vendor/fontawesome/css/font-awesome.min.css']},{name:'sweetalert',files:['assets/vendor/sweetalert/lib/sweet-alert.min.js','assets/vendor/sweetalert/lib/sweet-alert.css','common/directive/sweetalert.directive.js']}],modules:[{name:'toaster',files:['assets/vendor/angularjs-toaster/toaster.js','assets/vendor/angularjs-toaster/toaster.css']},{name:'ui.select',files:['common/directive/select.js','assets/css/select.min.css','common/directive/uiselectremote.directive.js','common/directive/uiselectviewvalue.directive.js']}],app:[{serie:false,name:'home',files:['modules/home/home.controller.js','modules/home/home.factory.js','common/directive/sweetalert.directive.js','modules/home/home.constant.js','modules/home/home.error.js','modules/home/home.url.js']},{serie:false,name:'login',files:['modules/login/login.controller.js','modules/login/login.factory.js','common/directive/sweetalert.directive.js','modules/login/login.constant.js','modules/login/login.error.js','modules/login/login.url.js','modules/login/login.e2e.js']}]})

.constant('$enviornment', {analyticsAppId:'UA-XXXXXXXX-1',facebookAppId:'12345678901234',jsonurl:'',name:'mock',backendurl:'http://localhost:9000',urlname:'mock',viewbasepath:'',jsonpath:'/json/detailJson/'})

;