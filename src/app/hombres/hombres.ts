import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatillas.model';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.html',
  styleUrls: ['./hombres.css']
})
export class Hombres {
  productos: Zapatilla[] = [
    { id: 1, nombre: 'Air Max 90', marca: 'Nike', precio: 389, talla: '39-44', emoji: '👟' },
    { id: 2, nombre: 'Ultraboost 22', marca: 'Adidas', precio: 459, talla: '39-45', emoji: '👟' },
    { id: 3, nombre: 'Air Force 1', marca: 'Nike', precio: 329, talla: '39-44', emoji: '👟' },
    { id: 4, nombre: '990v5', marca: 'New Balance', precio: 599, talla: '40-45', emoji: '👟' },
    { id: 5, nombre: 'Sk8-Hi', marca: 'Vans', precio: 239, talla: '39-43', emoji: '👟' },
    { id: 6, nombre: 'Chuck Taylor All Star', marca: 'Converse', precio: 199, talla: '39-42', emoji: '👟' },
    { id: 7, nombre: 'Dunk Low', marca: 'Nike', precio: 369, talla: '39-44', emoji: '👟' },
    { id: 8, nombre: 'Gazelle', marca: 'Adidas', precio: 299, talla: '39-43', emoji: '👟' },
  ];
}