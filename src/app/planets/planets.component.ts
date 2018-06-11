import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  name: string = "bob";
  planets: object[];
  constructor() { 

    this.planets = [
      { name: "Sun", isPlanet: false },
      { name: "Mercury", isPlanet: true},
      { name: "Venus", isPlanet: true},
      { name: "Earth", isPlanet: true},
      { name: "Mars", isPlanet: true }
    ]

  }

  ngOnInit() {
  }

}
