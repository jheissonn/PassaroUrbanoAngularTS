import { URL_API } from './app.api';
import { HttpClient   } from '@angular/common/http';
import{Injectable, ɵConsole} from '@angular/core'
import { Oferta } from './shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import'rxjs/add/operator/toPromise'
import'rxjs/add/operator/retry'



@Injectable()
export class OfertasService{

    constructor(private http:HttpClient){}


  
public getOfertas(): Promise<Oferta[]>{
   return this.http.get(`${URL_API}/ofertas?destaque=true`)
    .toPromise()
    .then((resposta: any)=> resposta)
}    
public getOfertasPorCategoria(categoria:string):Promise<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
    .toPromise()
    .then((resposta:any)=>resposta)

}
public getOfertaPorId(id: number): Promise<Oferta>{
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
    .toPromise()
    .then((resposta: any) => {      
        return resposta[0]
    })

}
public getComoUsarOfertaPorId(id:number): Promise<string>{

    return this.http.get(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then((resposta:any)=>
    {   
        
        return resposta[0].descricao
    }
    )
}
public getOndeFicaOfertaPorId(id:number): Promise<string>{

    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
    .toPromise()
    .then((resposta:any)=>
    {   
        
        return resposta[0].descricao
    }
    )
}
    public pesquisaOfertas(termo:String):Observable<Oferta[]>{

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10)
        .map((resposta:any)=>resposta)
        


    }
}