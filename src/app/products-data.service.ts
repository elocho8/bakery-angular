import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Food } from './products-list/Food';

const url = 'https://6691f98026c2a69f6e912a78.mockapi.io/products';

//* OBTIENE DATOS DE UN API */

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Food[]> {

    return this.http.get<Food[]>(url)
              .pipe(
                tap((productos: Food[]) => productos.forEach(producto => producto.quantity = 0))
              )
    ;
  }
}
