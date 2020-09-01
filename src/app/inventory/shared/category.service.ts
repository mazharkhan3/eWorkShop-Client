// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { environment } from "src/environments/environment";
// import { Observable } from "rxjs";

// @Injectable({
//   providedIn: "root",
// })
// export class CategoryService {
//   apiUrlGetCategory: string = "api/Products/GetProducts";
//   apiUrlSaveCategoryt: string = "api/Products/SaveProduct";
//   apiUrlDeleteCategory: string = "api/Products/DeleteProduct";
//   apiUrlUpdateCategory: string = "api/Products/UpdateProduct";

//   constructor(private http: HttpClient) {}

//   /* Customer */

//   getProduct(): Observable<ProductModel[]> {
//     return this.http.get<ProductModel[]>(
//       environment.restApiUrl + this.apiUrlGetProduct
//     );
//   }

//   saveProduct(product: ProductModel): Observable<ProductModel> {
//     return this.http.post<ProductModel>(
//       environment.restApiUrl + this.apiUrlSaveProduct,
//       product
//     );
//   }

//   updateProduct(id: number, product: ProductModel): Observable<ProductModel> {
//     return this.http.post<ProductModel>(
//       `${environment.restApiUrl}${this.apiUrlUpdateProduct}?id=${id}`,
//       product
//     );
//   }

//   removeProduct(id: number): Observable<ProductModel> {
//     return this.http.get<ProductModel>(
//       `${environment.restApiUrl}${this.apiUrlDeleteProduct}?id=${id}`
//     );
//   }
// }
