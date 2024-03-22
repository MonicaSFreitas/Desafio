import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Fotos } from './fotos';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  // productList: Fotos[]=[];

  productList = signal([]);
  API: string = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    // return this.httpClient.get(this.API).pipe(res=> res);
    return this.httpClient.get(this.API).subscribe({
      next:(resp: any)=>{this.productList.update(resposta=>resposta = resp)},
      error:(error: any)=>{console.log(error)}
    });
  }
}
