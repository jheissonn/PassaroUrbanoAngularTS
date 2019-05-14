import { OndeFicaComponent } from './../../src/app/oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './../../src/app/oferta/como-usar/como-usar.component';
import { RestaurantesComponent } from './../../src/app/restaurantes/restaurantes.component';
import { DiversaoComponent } from './../../src/app/diversao/diversao.component';
import { HomeComponent } from './../../src/app/home/home.component';
import { OfertaComponent } from 'src/app/oferta/oferta.component';
import { OrdemCompraComponent } from 'src/app/ordem-compra/ordem-compra.component';
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'oferta', component: HomeComponent },
    { path: 'oferta/:id', component: OfertaComponent,
        children: [
            { path: '', component: ComoUsarComponent },
            { path: 'como-usar', component: ComoUsarComponent },
            { path: 'onde-fica', component: OndeFicaComponent }
        ] }, { path: 'ordemCompra', component: OrdemCompraComponent }
];
//# sourceMappingURL=app.routes.js.map