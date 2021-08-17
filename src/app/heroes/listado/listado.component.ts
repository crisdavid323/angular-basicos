import { Component, } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroeBorrados: string[] = [];
  heroeBorrados1: string = '';
  borrarHeroe() {
    // this.heroeBorrados.push(this.heroes.shift() || '');
    this.heroeBorrados1 = this.heroes.shift() || '';
  }
}
