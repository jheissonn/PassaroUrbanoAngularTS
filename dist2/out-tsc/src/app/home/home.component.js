import * as tslib_1 from "tslib";
import { OfertasService } from './../ofertas.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(ofertasService) {
        this.ofertasService = ofertasService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.ofertas = this.ofertasService.getOfertas()
        //console.log(this.ofertas)
        this.ofertasService.getOfertas()
            .then(function (ofertas) {
            _this.ofertas = ofertas;
        })
            .catch(function (param) {
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [OfertasService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map