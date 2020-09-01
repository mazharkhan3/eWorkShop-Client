import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ProductModel } from "src/app/models/ProductModel";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiUrlGetProduct: string = "api/Products/GetProducts";
  apiUrlSaveProduct: string = "api/Products/SaveProduct";
  apiUrlDeleteProduct: string = "api/Products/DeleteProduct";
  apiUrlUpdateProduct: string = "api/Products/UpdateProduct";

  constructor(private http: HttpClient) {}

  /* Customer */

  getProduct(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(
      environment.restApiUrl + this.apiUrlGetProduct
    );
  }

  saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(
      environment.restApiUrl + this.apiUrlSaveProduct,
      product
    );
  }

  updateProduct(id: number, product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(
      `${environment.restApiUrl}${this.apiUrlUpdateProduct}?id=${id}`,
      product
    );
  }

  removeProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(
      `${environment.restApiUrl}${this.apiUrlDeleteProduct}?id=${id}`
    );
  }
}
