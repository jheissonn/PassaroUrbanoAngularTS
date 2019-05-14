import * as tslib_1 from "tslib";
import { OfertasService } from './../../ofertas.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var ComoUsarComponent = /** @class */ (function () {
    function ComoUsarComponent(route, ofertasService) {
        this.route = route;
        this.ofertasService = ofertasService;
        this.comoUsar = '';
    }
    ComoUsarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (parametros) {
            _this.ofertasService.getComoUsarOfertaPorId(parametros.id)
                .then(function (descricao) { _this.comoUsar = descricao; });
        });
    };
    ComoUsarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-como-usar',
            templateUrl: './como-usar.component.html',
            styleUrls: ['./como-usar.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            OfertasService])
    ], ComoUsarComponent);
    return ComoUsarComponent;
}());
export { ComoUsarComponent };
//# sourceMappingURL=como-usar.component.js.map