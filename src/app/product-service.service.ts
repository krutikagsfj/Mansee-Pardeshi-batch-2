import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductBrands } from 'src/IProductBrands';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ProductServiceService {

  constructor(private http: HttpClient) { }


getProductBrand (): Observable<IProductBrands []>
{
  return this.http.get<IProductBrands []>('/assets/productBrand/productBrands.json');

}
}