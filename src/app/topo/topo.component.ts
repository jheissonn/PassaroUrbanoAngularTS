import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, catchError } from 'rxjs/operators';
import '../util/rxjs-extensions'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {
  public ofertas:Observable<Oferta[]>
  private subjectPesquisa:Subject<String> = new Subject<string>()
  constructor(private ofertasService:OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((termo:string)=>{
    if(termo.trim() ===''){
  
          return  Observable.of<Oferta[]>([])//Observable.of<Oferta[]>([])
        }
 
      return this.ofertasService.pesquisaOfertas(termo)
    })
    .catch((err:any)=>{ console.log(err)
    return Observable.of<Oferta[]> ([])})
   
  }

  public pesquisa(termoDaBusca:string):void{
    this.subjectPesquisa.next(termoDaBusca)

  }
  public limpaPesquisa():void {
    this.subjectPesquisa.next('')

  }


}
