import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

import { FotosService } from './fotos.service';
import { Fotos } from './fotos';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';



@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent implements OnInit {

// productList: Fotos[]=[];

productList = computed<Fotos[]>(()=>this.fotosService.productList())

paginaAExibir = signal(1);

productListPaginado = computed(()=> {

  let arrayPaginado = Array.from({length: Math.ceil(this.productList().length / 10)}, (v, i) => this.productList().slice(i * 10, i * 10 + 10));

  return arrayPaginado[this.paginaAExibir()] || [];
});

constructor(private fotosService: FotosService) {}


  ngOnInit(): void {
    this.fotosService.getProducts()
  }


}
