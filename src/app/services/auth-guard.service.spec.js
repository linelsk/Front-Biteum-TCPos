"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_guard_service_1 = require("./auth-guard.service");
var testing_2 = require("@angular/router/testing");
describe('AuthGuardService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule]
        });
        service = testing_1.TestBed.inject(auth_guard_service_1.AuthGuardService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-guard.service.spec.js.map