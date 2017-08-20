/*I am using mock json and we can't write mock json that's why i am using local storage for write data */

(function() {
    'use strict';

    angular
        .module('seed')
        .controller('TransactionController', TransactionController);

    function TransactionController(transactionFactory, errorService, transactionError) {
        var transaction = this;
        // unresolved
        transaction.transactionList;

        transaction.getLoginUserDate = function() {
            transactionFactory.getLoginUserDate().then(function(res) {
                    transaction.loginUserDate = res;
                },
                function() {
                    errorService.error(loginError.login.error.loginerror, "error");
                    // $state.go('transaction');
                })

        }

        transaction.getTransaction = function() {
            transaction.transactionList = JSON.parse(localStorage.getItem("transaction"));
            console.log("transaction.transactionList ", transaction.transactionList);
        }


        transaction.getLoginUserDate();
        transaction.getTransaction();

    }
})();