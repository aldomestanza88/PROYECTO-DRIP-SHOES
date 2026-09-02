import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatillas.model';

@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.html',
  styleUrls: ['./ninos.css']
})
export class Ninos {
  productos: Zapatilla[] = [
    { id: 1, nombre: 'Dunk Low Kids', marca: 'Nike', precio: 259, talla: '28-35', emoji: '👟' },
    { id: 2, nombre: 'Superstar Kids', marca: 'Adidas', precio: 219, talla: '27-34', emoji: '👟' },
    { id: 3, nombre: 'Air Max 90 Kids', marca: 'Nike', precio: 279, talla: '28-35', emoji: '👟' },
    { id: 4, nombre: 'Old Skool Kids', marca: 'Vans', precio: 179, talla: '26-33', emoji: '👟' },
    { id: 5, nombre: '574 Kids', marca: 'New Balance', precio: 199, talla: '27-34', emoji: '👟' },
    { id: 6, nombre: 'Chuck Taylor Kids', marca: 'Converse', precio: 159, talla: '26-33', emoji: '👟' },
    { id: 7, nombre: 'Gazelle Kids', marca: 'Adidas', precio: 189, talla: '27-34', emoji: '👟' },
    { id: 8, nombre: 'Air Force 1 Kids', marca: 'Nike', precio: 239, talla: '28-35', emoji: '👟' },
  ];
}