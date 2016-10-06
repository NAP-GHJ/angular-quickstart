"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ghj on 16-10-6.
 */
var core_1 = require('@angular/core');
var AppComponment = (function () {
    function AppComponment() {
    }
    AppComponment = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My second angular app</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponment);
    return AppComponment;
}());
exports.AppComponment = AppComponment;
//# sourceMappingURL=app.component.js.map