import * as tslib_1 from "tslib";
import { OfertasService } from './../../ofertas.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var OndeFicaComponent = /** @class */ (function () {
    function OndeFicaComponent(route, ofertasService) {
        this.route = route;
        this.ofertasService = ofertasService;
        this.ondeFica = '';
    }
    OndeFicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (parametros) {
            _this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
                .then(function (descricao) { _this.ondeFica = descricao; });
        });
    };
    OndeFicaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-onde-fica',
            templateUrl: './onde-fica.component.html',
            styleUrls: ['./onde-fica.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, OfertasService])
    ], OndeFicaComponent);
    return OndeFicaComponent;
}());
export { OndeFicaComponent };
//# sourceMappingURL=onde-fica.component.js.map