import { OndeFicaComponent } from './../../src/app/oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './../../src/app/oferta/como-usar/como-usar.component';
import { Component } from '@angular/core';
import { Oferta } from './../../src/app/shared/oferta.model';
import { RestaurantesComponent } from './../../src/app/restaurantes/restaurantes.component';
import { DiversaoComponent } from './../../src/app/diversao/diversao.component';
import { HomeComponent } from './../../src/app/home/home.component';
import { Routes } from '@angular/router';
import { OfertaComponent } from 'src/app/oferta/oferta.component';
import { OrdemCompraComponent } from 'src/app/ordem-compra/ordem-compra.component';

export const ROUTES:Routes=[
    {path:'',component:HomeComponent},
    {path:'restaurantes',component:RestaurantesComponent},
    {path:'diversao',component:DiversaoComponent},
    {path:'oferta',component: HomeComponent},
    {path:'oferta/:id', component: OfertaComponent,
    children:[
        {path: '',component: ComoUsarComponent},
        {path: 'como-usar',component: ComoUsarComponent},
        {path: 'onde-fica',component: OndeFicaComponent}

    ]},{path:'ordemCompra',component:OrdemCompraComponent}

]