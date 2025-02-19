import { Component } from '@angular/core';
import { Producto } from '../../interfaces/carrito.interface';
import { CarritoService } from '../../services/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  carrito : Producto[] = []

  
  constructor(
    private carritoService : CarritoService
  ){
    this.carrito == this.carritoService.getCarrito()
  }

  eliminarDelCarrito(id : number){
    this.carritoService.eliminarDelCarrito(id);
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito();
  }

  

}
