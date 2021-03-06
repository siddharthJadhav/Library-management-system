var myAppDev = angular.module('myAppDev', ['seed', 'ngMockE2E']);
myAppDev.run(function($httpBackend) {
    var phones = [{ name: 'phone1' }, { name: 'phone2' }];

    // returns the current list of phones
    $httpBackend.whenGET('/phones').respond(phones);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
        var phone = angular.fromJson(data);
        phones.push(phone);
        return [200, phone, {}];
    });
    $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real serverssssss
});