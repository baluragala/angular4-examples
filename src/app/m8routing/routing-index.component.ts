import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-routing-index',
  templateUrl: './routing-index.component.html',
  styles: [`.active {
    background-color: orange;
    color: white;
    font-size: 1.2em
  }`]
})
export class RoutingIndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
