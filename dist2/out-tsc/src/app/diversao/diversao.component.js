import * as tslib_1 from "tslib";
import { OfertasService } from './../ofertas.service';
import { Component } from '@angular/core';
var DiversaoComponent = /** @class */ (function () {
    function DiversaoComponent(ofertasService) {
        this.ofertasService = ofertasService;
    }
    DiversaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ofertasService.getOfertasPorCategoria('diversao')
            .then(function (ofertas) { return _this.ofertas = ofertas; });
    };
    DiversaoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-diversao',
            templateUrl: './diversao.component.html',
            styleUrls: ['./diversao.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [OfertasService])
    ], DiversaoComponent);
    return DiversaoComponent;
}());
export { DiversaoComponent };
//# sourceMappingURL=diversao.component.js.map