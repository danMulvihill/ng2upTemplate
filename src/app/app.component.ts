import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <nav class="navbar navbar-expand-sm bg-light">

          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="two">Structure</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="table">Table</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="login">Forms</a>
            </li>
          </ul>

        </nav>
      
      <router-outlet></router-outlet>` 
})
export class AppComponent {
  title = 'Angular 2+';
  subtitle = 'This is a more loaded template then what you get from @angular/cli'
}
