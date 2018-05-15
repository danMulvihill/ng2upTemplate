import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular 2+';
  subtitle = 'This is a more loaded template then what you get from @angular/cli'
  constructor() { }

  ngOnInit() {
  }

}
