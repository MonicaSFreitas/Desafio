import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { FotosComponent } from '../../components/fotos/fotos.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule, FotosComponent, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  obra = "../assets/img/colorida.jpg"
}
