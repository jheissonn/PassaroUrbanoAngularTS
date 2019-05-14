import * as tslib_1 from "tslib";
import { OfertasService } from './../ofertas.service';
import { Component } from '@angular/core';
var RestaurantesComponent = /** @class */ (function () {
    function RestaurantesComponent(ofertasService) {
        this.ofertasService = ofertasService;
    }
    RestaurantesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ofertasService.getOfertasPorCategoria('restaurante')
            .then(function (ofertas) { return _this.ofertas = ofertas; });
    };
    RestaurantesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-restaurantes',
            templateUrl: './restaurantes.component.html',
            styleUrls: ['./restaurantes.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [OfertasService])
    ], RestaurantesComponent);
    return RestaurantesComponent;
}());
export { RestaurantesComponent };
//# sourceMappingURL=restaurantes.component.js.map