import * as tslib_1 from "tslib";
import { OfertasService } from './../ofertas.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
var OfertaComponent = /** @class */ (function () {
    function OfertaComponent(route, ofertasService) {
        this.route = route;
        this.ofertasService = ofertasService;
    }
    OfertaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (parametros) {
            _this.ofertasService.getOfertaPorId(_this.route.snapshot.params['id'])
                .then(function (oferta) {
                _this.oferta = oferta;
                console.log(_this.oferta);
            });
            parametros.id;
        });
    };
    OfertaComponent.prototype.ngOnDestroy = function () {
    };
    OfertaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-oferta',
            templateUrl: './oferta.component.html',
            styleUrls: ['./oferta.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            OfertasService])
    ], OfertaComponent);
    return OfertaComponent;
}());
export { OfertaComponent };
//# sourceMappingURL=oferta.component.js.map