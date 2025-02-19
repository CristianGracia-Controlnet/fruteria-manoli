import { Component } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';
import { ActivatedRoute } from '@angular/router';
import { FrutasService } from '../../services/frutas/frutas.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  fruta! : Fruta;
  frutaEncontrada : boolean = true;

  constructor(
    private route: ActivatedRoute,
    private frutaService : FrutasService
  ){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const fruta = this.frutaService.getFrutasById(id);

    if(fruta){
      this.fruta = fruta;
    }else{
      this.frutaEncontrada = false;
    }
  }

  toggleFavorito(){
    this.frutaService.toggleFavorita(this.fruta.id);
  }
}
