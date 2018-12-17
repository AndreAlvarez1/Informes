import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConectorProvider {

url: string= "http://test.apipdv.clubgournet.cl/";
port: string= "3080";


  constructor(public http: Http) {
    console.log('Hello ConectorProvider Provider');
  }

  traedatosGet(ruta){
    let url = this.url + ruta;
    return this.http.get(url).map( res => res.json())
  }


  traedatosPost(){
    let url = this.url + ":" + this.port + "/ws/bodegas";
    let body = {x:"soy el body"};
    return this.http.post(url, body).map( res => res.json())
  }




}
