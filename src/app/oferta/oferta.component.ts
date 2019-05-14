import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router'
import 'rxjs/Rx'
import{Subscription} from 'rxjs/Subscription'
import {CarrinhoService} from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit,OnDestroy {
  
  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription

  public oferta:Oferta
  constructor(
    private route: ActivatedRoute,
     private ofertasService: OfertasService,
     private carrinhoService:CarrinhoService
     ) {


   } 

  ngOnInit() {

    this.route.params.subscribe((parametros:Params)=> {
      this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta)=>
      {//console.log(oferta)
         this.oferta = oferta
        // console.log(this.oferta)
      })
      parametros.id
    })
  
   
  }
  ngOnDestroy(){
  }
  public adicionarItemCarrinho(oferta:Oferta):void{
    this.carrinhoService.incluirItem(this.oferta)
   // console.log(this.carrinhoService.exibirItens())

    //console.log(this.oferta)

  }

}
