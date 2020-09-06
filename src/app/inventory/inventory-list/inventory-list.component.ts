import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../shared/inventory.service";
import { ProductModel } from "src/app/models/ProductModel";

@Component({
  selector: "app-inventory-list",
  templateUrl: "./inventory-list.component.html",
  styleUrls: ["./inventory-list.component.scss"],
})
export class InventoryListComponent implements OnInit {
  allProducts: ProductModel[] = [];
  products: ProductModel[] = [];
  product: ProductModel = new ProductModel();
  updateProductObj: ProductModel = new ProductModel();
  productId: number = 0;

  constructor(
    private router: Router,
    private inventoryService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  // promotion(){
  //   this.router.navigate(['inventory','promotion-list'])
  // }
  // stock(){
  //   this.router.navigate(['inventory','stock-list'])
  // }

  category() {
    this.router.navigate(["inventory", "category-list"]);
  }

  getProducts() {
    this.inventoryService.getProduct().subscribe(
      (data) => {
        this.allProducts = data;
        this.products = data;
      },
      (error) => {}
    );
  }

  saveProduct() {
    this.inventoryService.saveProduct(this.product).subscribe(
      (data) => {
        this.getProducts();
      },
      (error) => {}
    );
  }

  storeProductData(productId: number, product: ProductModel) {
    this.productId = productId;
    this.updateProductObj = product;
  }

  updateProduct() {
    this.inventoryService
      .updateProduct(this.productId, this.updateProductObj)
      .subscribe(
        (data) => {
          this.getProducts();
        },
        (error) => {}
      );
  }

  deleteProduct(productId: number) {
    this.inventoryService.removeProduct(productId).subscribe(
      (data) => {
        this.getProducts();
      },
      (error) => {}
    );
  }

  searchProductByName(productName: string) {
    // reassign customerslist
    this.products = this.allProducts;

    this.products = this.products.filter((item) => {
      return (
        item.ProductName.toLowerCase().indexOf(productName.toLowerCase()) >= 0
      );
    });
  }
}
