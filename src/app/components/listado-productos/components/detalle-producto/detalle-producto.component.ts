import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Fruta } from '../../../../interfaces/fruta.interface';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../../../services/carrito/carrito.service';

@Component({
  selector: 'component-detalle-producto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  @Input() fruta! : Fruta;
  @Output() frutaFavorita = new EventEmitter<number>();

  toggleFavorito(id: number){
    this.frutaFavorita.emit(id);
  }

  constructor(
    private carritoService : CarritoService
  ){}

  agregarAlCarrito(){
    this.carritoService.agregarAlCarrito(this.fruta);
  }
}
