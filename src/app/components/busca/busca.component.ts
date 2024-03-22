import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [MatIconModule,MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})
export class BuscaComponent {

valorAtual: string = '';
valorSalvo: string = '';

botaoClicado(){
  alert("botão clicado")
}


onKeyUp(evento: KeyboardEvent){
  console.log((<HTMLInputElement>evento.target).value);
  this.valorAtual = (<HTMLInputElement>evento.target).value
}

}
