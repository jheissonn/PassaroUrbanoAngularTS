import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var DescricaoReduzida = /** @class */ (function () {
    function DescricaoReduzida() {
    }
    DescricaoReduzida.prototype.transform = function (texto, trucarEm) {
        if (texto.length > trucarEm) {
            return texto.substr(0, trucarEm) + '...';
        }
        return texto;
    };
    DescricaoReduzida = tslib_1.__decorate([
        Pipe({ name: 'descricaoReduzida' })
    ], DescricaoReduzida);
    return DescricaoReduzida;
}());
export { DescricaoReduzida };
//# sourceMappingURL=descricao-reduzida.pipe.js.map