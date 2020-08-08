import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-of-day',
  templateUrl: './end-of-day.component.html',
  styleUrls: ['./end-of-day.component.scss']
})
export class EndOfDayComponent implements OnInit {


  constructor(   private router : Router) { }


  ngOnInit() {
  }
  salesHistory(){
    this.router.navigate(['pos','sales-history'])
  }
  Checkout(){
    this.router.navigate(['pos','list']) 
  }
}
