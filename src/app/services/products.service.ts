import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    { name: 'Figurine Astérix', price: 29.99, description: '...' },
    { name: 'Figurine Obélix', price: 34.99, description: '...' },
    { name: 'Figurine Panoramix', price: 39.99, description: '...' },
  ];

  getProducts() {
    return [...this.products];
  }
}
