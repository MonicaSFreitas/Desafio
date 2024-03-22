import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GaleriaComponent } from './components/galeria/galeria.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [

  ],

  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule,
    GaleriaComponent,
    FotosComponent,
    MatGridListModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ]

})
export class AppModule { }
