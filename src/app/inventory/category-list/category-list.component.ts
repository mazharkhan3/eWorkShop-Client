import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  stock(){
    this.router.navigate(['inventory','stock-list'])
  }
  promotion(){
    this.router.navigate(['inventory','promotion-list'])
  }
}
