import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  promotion(){
    this.router.navigate(['inventory','promotion-list'])
  }
  stock(){
    this.router.navigate(['inventory','stock-list'])
  }
  category(){
    this.router.navigate(['inventory','category-list'])
  }
}
