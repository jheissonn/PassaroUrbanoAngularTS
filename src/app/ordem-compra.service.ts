import { Headers, RequestOptions } from '@angular/Http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { URL_API } from './app.api';

import { Pedido } from './shared/pedido.model';
import{Injectable} from '@angular/core'
import { Observable } from 'rxjs';


@Injectable()
export class OrdemCompraService{

    
    constructor(private http :HttpClient){}
    public efetivarCompra(pedido:Pedido):   Observable<any>{

        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')

        
        let options = {
            headers: httpHeaders
       }; 
        return this.http.post(
            `${URL_API}/pedidos`,           
           JSON.stringify(pedido),
           options      
        )
        .map((resposta:any)=> resposta.id)
    }


}