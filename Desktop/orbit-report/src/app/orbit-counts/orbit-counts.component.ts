// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core'; //copied from orbit-list.component.ts//
import { Satellite } from '../satellite'; //copied from orbit-list.component.ts//

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[]; //copied from orbit-list.component.ts//
  // count = (Satellite.match(/Space Debris) || []).length;
  
  constructor() { }

  ngOnInit() {
  }
countOccurrence(arr, val){
return arr.reduce((acc,elem) =>{
  return(val===elem ? acc + 1 : acc)
}, 0)
}
}
