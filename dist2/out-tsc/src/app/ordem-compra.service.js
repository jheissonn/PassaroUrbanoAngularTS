import * as tslib_1 from "tslib";
import { Headers, RequestOptions } from '@angular/Http';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './app.api';
import { Injectable } from '@angular/core';
var OrdemCompraService = /** @class */ (function () {
    function OrdemCompraService(http) {
        this.http = http;
    }
    OrdemCompraService.prototype.efetivarCompra = function (pedido) {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(pedido);
        return this.http.post(URL_API + "/pedidos", JSON.stringify(pedido), new RequestOptions({ headers: Headers }))
            .map(function (resposta) { return console.log(resposta.json()); });
    };
    OrdemCompraService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrdemCompraService);
    return OrdemCompraService;
}());
export { OrdemCompraService };
//# sourceMappingURL=ordem-compra.service.js.map