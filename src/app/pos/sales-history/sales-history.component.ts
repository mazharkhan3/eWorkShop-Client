import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.scss']
})
export class SalesHistoryComponent implements OnInit {

  constructor( private router : Router
 
  ) {
    
   }

  ngOnInit() {
  }
  Checkout(){
    this.router.navigate(['pos','list']) 
  }
  endOfDay(){
    this.router.navigate(['pos','end-of-day']) 
  }
}
