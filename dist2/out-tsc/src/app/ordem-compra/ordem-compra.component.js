import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
var OrdemCompraComponent = /** @class */ (function () {
    function OrdemCompraComponent(ordemCompraService) {
        this.ordemCompraService = ordemCompraService;
        this.pedido = new Pedido('', '', '', '');
        this.endereco = '';
        this.numero = '';
        this.complemento = '';
        this.formaPagamento = '';
        //estados primitivo dos campos(pristine)
        this.enderecoEstadoPrimitivo = true;
        this.numeroEstadoPrimitivo = true;
        this.complementoEstadoPrimitivo = true;
        this.formaPagamentoEstadoPrimitivo = true;
        //controlar botão confirmar compra
        this.formEstado = 'disabled';
    }
    OrdemCompraComponent.prototype.ngOnInit = function () {
    };
    OrdemCompraComponent.prototype.atualizaEndereco = function (endereco) {
        this.endereco = endereco;
        this.enderecoEstadoPrimitivo = false;
        if (this.endereco.length > 3) {
            this.enderecoValido = true;
        }
        else {
            this.enderecoValido = false;
        }
        this.habilitaForm();
        // console.log(this.endereco)
    };
    OrdemCompraComponent.prototype.atualizaNumero = function (numero) {
        this.numero = numero;
        this.numeroEstadoPrimitivo = false;
        if (this.numero.length > 0) {
            this.numeroValido = true;
        }
        else {
            this.numeroValido = false;
        }
        // console.log(this.numero)
        this.habilitaForm();
    };
    OrdemCompraComponent.prototype.atualizaComplemento = function (complemento) {
        this.complemento = complemento;
        this.complementoEstadoPrimitivo = false;
        if (this.complemento.length > 0) {
            this.complementoValido = true;
        }
        // console.log(this.complemento)
        this.habilitaForm();
    };
    OrdemCompraComponent.prototype.atualizaFormaPagamento = function (formaPagamento) {
        this.formaPagamento = formaPagamento;
        this.formaPagamentoEstadoPrimitivo = false;
        if (this.formaPagamento.length > 0) {
            this.formaPagamentoValido = true;
        }
        else {
            this.formaPagamentoValido = false;
        }
        //console.log(this.formaPagamento)
        this.habilitaForm();
    };
    OrdemCompraComponent.prototype.habilitaForm = function () {
        if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido) {
            this.formEstado = '';
        }
        else {
            this.formEstado = 'disabled';
        }
    };
    OrdemCompraComponent.prototype.confirmarCompra = function () {
        this.pedido.endereco = this.endereco;
        this.pedido.numero = this.numero;
        this.pedido.complemento = this.complemento;
        this.pedido.formaPagamento = this.formaPagamento;
        this.ordemCompraService.efetivarCompra(this.pedido)
            .subscribe();
    };
    OrdemCompraComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ordem-compra',
            templateUrl: './ordem-compra.component.html',
            styleUrls: ['./ordem-compra.component.css'],
            providers: [OrdemCompraService]
        }),
        tslib_1.__metadata("design:paramtypes", [OrdemCompraService])
    ], OrdemCompraComponent);
    return OrdemCompraComponent;
}());
export { OrdemCompraComponent };
//# sourceMappingURL=ordem-compra.component.js.map