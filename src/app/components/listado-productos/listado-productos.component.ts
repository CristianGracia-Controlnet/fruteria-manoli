 import { Component } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';
import { FrutasService } from '../../services/frutas/frutas.service';
import { DetalleProductoComponent } from "./components/detalle-producto/detalle-producto.component";

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [DetalleProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  frutas: Fruta[] = [];
  mostrarFavoritos : boolean = false;

  constructor(private frutasService : FrutasService){
    this.frutas = this.frutasService.getFrutas();
  }

  toggleFavorito(id:number){
    this.frutasService.toggleFavorita(id)
  }

  toggleMostrarFavoritos() {
    this.mostrarFavoritos = !this.mostrarFavoritos;
  }

  get frutasFitradas(){
    return this.mostrarFavoritos ?
    this.frutas.filter(f => f.favorita)
    : this.frutas
  }
}
