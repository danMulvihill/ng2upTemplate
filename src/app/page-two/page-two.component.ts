import { Component, OnInit } from '@angular/core';
//import { METHODS } from 'http';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  private city = "BATTLEBORO";
  private C = this.city.charAt(0).toUpperCase();
  status: boolean;
 
  constructor() { 
    this.getUserStatus();
    
  }
      
  displayCity(){
    return this.city.charAt(0).toUpperCase()
  }

  getUserStatus(){
      this.status = false;
      return this.status;
  }

  changeStatus(){
    this.status = !this.status;
    return this.status;
    
  }

  deAct(){
    if (this.city=="Deadwood") this.city = "Battleboro";
    else this.city = "Deadwood";
  }
}
