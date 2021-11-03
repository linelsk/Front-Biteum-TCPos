"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_service_1 = require("./auth.service");
var testing_2 = require("@angular/router/testing");
describe('AuthService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule]
        });
        service = testing_1.TestBed.inject(auth_service_1.AuthService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth.service.spec.js.map