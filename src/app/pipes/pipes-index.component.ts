import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pipes-index',
  templateUrl: './pipes-index.component.html',
  styles: []
})
export class PipesIndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  OnClick() {
    this.router.navigateByUrl('/pipes');
  }

}
