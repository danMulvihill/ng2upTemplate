import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

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

  ngOnInit() {
  }

  onSubmit(formData: NgForm){
    console.log("submitted")
    console.log(formData.value.username);
  }

}
