import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  private city = "Battleboro, NH";
  status: boolean;
 
  constructor() { 
    this.getUserStatus();
    
  }
      
  ngOnInit() {
  }
  displayCity(){
    return this.city;
  }

  getUserStatus(){
      this.status = true;
      return this.status;
  }

  deAct(){
    alert("Dead!");
    this.city = "Dead";
  }
}
