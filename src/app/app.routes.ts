import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'listado', component:ListadoProductosComponent},
    {path:'producto/:id', component:ProductoComponent},
    {path:'carrito', component:CarritoComponent},
    {path:'**', component:NotFoundComponent}
];
