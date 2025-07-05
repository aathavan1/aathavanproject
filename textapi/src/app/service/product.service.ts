import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../model/product';
import { api } from '../appconstant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient: HttpClient = inject(HttpClient)
  productEntryApi = api + '/product/entry/'

  getProductGroup(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "productgroup");
  }

  getProduct(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "product");
  }

  getSize(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "size");
  }

  getSizeGroup(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "sizegroup");
  }

  getQuality(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "quality");
  }

  getStyle(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "style");
  }

  getBrand(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "brand");
  }

  getHsn(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.productEntryApi + "hsn");
  }

}
