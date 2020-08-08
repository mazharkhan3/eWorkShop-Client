import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  promotion(){
    this.router.navigate(['inventory','promotion-list'])
  }
  category(){
    this.router.navigate(['inventory','category-list'])
  }
}
