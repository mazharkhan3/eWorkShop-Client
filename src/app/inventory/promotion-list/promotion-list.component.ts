import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  stock(){
    this.router.navigate(['inventory','stock-list'])
  }
  category(){
    this.router.navigate(['inventory','category-list'])
  }
}
