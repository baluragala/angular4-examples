import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-interpolation',
  template: `
    <h4>
      Interpolation
    </h4>
    <div>
    Username: <pre>{{username}}</pre>
    </div>
    <div>
    Today: <pre>{{today}}</pre>
    </div>
    
    <div>
    hurray function returns: <pre>{{hurray()}}</pre>
    </div>
    
    <div>
    Conditional expression: <pre>{{username.length > 10 ? 'Lengthy name' : 'short name'}}</pre>
    </div>
    
    <div>
    Expressions (functional call on object ) : <pre>{{ username.toUpperCase() }}</pre>
    </div>
    
    <div>
    Expressions (Arthimetic) : <pre>{{ 2 * 10 + 18 / 2 % 10 }}</pre>
    </div>
    
    <div>
    Array (In String format) : <pre>{{ languages }}</pre>
    </div>
  `,
  styles: []
})
export class InterpolationComponent implements OnInit {

  username: string = "Balakrishna Ragala";
  today: Date = new Date();
  languages:Array<string>=['JS','Java','Python'];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  OnClick() {
    this.router.navigateByUrl("/template")
  }

  hurray() {
    return "Angular is awesome !!!"
  }

}
