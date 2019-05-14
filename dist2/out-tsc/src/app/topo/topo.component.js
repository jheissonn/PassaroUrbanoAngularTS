import * as tslib_1 from "tslib";
import { OfertasService } from './../ofertas.service';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import '../util/rxjs-extensions';
var TopoComponent = /** @class */ (function () {
    function TopoComponent(ofertasService) {
        this.ofertasService = ofertasService;
        this.subjectPesquisa = new Subject();
    }
    TopoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ofertas = this.subjectPesquisa
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(function (termo) {
            if (termo.trim() === '') {
                return Observable.of([]); //Observable.of<Oferta[]>([])
            }
            return _this.ofertasService.pesquisaOfertas(termo);
        })
            .catch(function (err) {
            console.log(err);
            return Observable.of([]);
        });
    };
    TopoComponent.prototype.pesquisa = function (termoDaBusca) {
        this.subjectPesquisa.next(termoDaBusca);
    };
    TopoComponent.prototype.limpaPesquisa = function () {
        this.subjectPesquisa.next('');
    };
    TopoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-topo',
            templateUrl: './topo.component.html',
            styleUrls: ['./topo.component.css'],
            providers: [OfertasService]
        }),
        tslib_1.__metadata("design:paramtypes", [OfertasService])
    ], TopoComponent);
    return TopoComponent;
}());
export { TopoComponent };
//# sourceMappingURL=topo.component.js.map