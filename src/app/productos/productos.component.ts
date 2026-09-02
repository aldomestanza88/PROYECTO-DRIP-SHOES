import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  productos = [
    { nombre: 'Zapatilla 1', precio: 100, marca: 'Nike', imagen: '' },
    { nombre: 'Zapatilla 2', precio: 150, marca: 'Adidas', imagen: '' },
    { nombre: 'Zapatilla 3', precio: 200, marca: 'Puma', imagen: '' }
  ];
}
