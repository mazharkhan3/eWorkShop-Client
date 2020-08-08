import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-list',
  templateUrl: './pos-list.component.html',
  styleUrls: ['./pos-list.component.scss']
})
export class PosListComponent implements OnInit {

  constructor(   private router : Router) { }

  ngOnInit() {
  }
  salesHistory(){
    this.router.navigate(['pos','sales-history'])
  }
  endOfDay(){
    this.router.navigate(['pos','end-of-day']) 
  }
  
}
