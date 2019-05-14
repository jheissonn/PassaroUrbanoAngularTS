import * as tslib_1 from "tslib";
import { URL_API } from './app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';
var OfertasService = /** @class */ (function () {
    function OfertasService(http) {
        this.http = http;
    }
    OfertasService.prototype.getOfertas = function () {
        return this.http.get(URL_API + "/ofertas?destaque=true")
            .toPromise()
            .then(function (resposta) { return resposta; });
    };
    OfertasService.prototype.getOfertasPorCategoria = function (categoria) {
        return this.http.get(URL_API + "/ofertas?categoria=" + categoria)
            .toPromise()
            .then(function (resposta) { return resposta; });
    };
    OfertasService.prototype.getOfertaPorId = function (id) {
        return this.http.get(URL_API + "/ofertas?id=" + id)
            .toPromise()
            .then(function (resposta) {
            return resposta[0];
        });
    };
    OfertasService.prototype.getComoUsarOfertaPorId = function (id) {
        return this.http.get(URL_API + "/como-usar?id=" + id)
            .toPromise()
            .then(function (resposta) {
            return resposta[0].descricao;
        });
    };
    OfertasService.prototype.getOndeFicaOfertaPorId = function (id) {
        return this.http.get(URL_API + "/onde-fica?id=" + id)
            .toPromise()
            .then(function (resposta) {
            return resposta[0].descricao;
        });
    };
    OfertasService.prototype.pesquisaOfertas = function (termo) {
        return this.http.get(URL_API + "/ofertas?descricao_oferta_like=" + termo)
            .retry(10)
            .map(function (resposta) { return resposta; });
    };
    OfertasService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OfertasService);
    return OfertasService;
}());
export { OfertasService };
//# sourceMappingURL=ofertas.service.js.map