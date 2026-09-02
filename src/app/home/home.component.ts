import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatillas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  destacados: Zapatilla[] = [
    { id: 1, nombre: 'Air Max 90', marca: 'Nike', precio: 389, talla: '38-44', emoji: '👟' },
    { id: 2, nombre: 'Ultraboost 22', marca: 'Adidas', precio: 459, talla: '37-45', emoji: '👟' },
    { id: 3, nombre: 'Chuck 70 High', marca: 'Converse', precio: 249, talla: '36-42', emoji: '👟' },
    { id: 4, nombre: 'Old Skool', marca: 'Vans', precio: 219, talla: '35-44', emoji: '👟' },
    { id: 5, nombre: '574 Core', marca: 'New Balance', precio: 279, talla: '37-45', emoji: '👟' },
    { id: 6, nombre: 'Dunk Low Kids', marca: 'Nike', precio: 259, talla: '28-35', emoji: '👟' },
  ];
}