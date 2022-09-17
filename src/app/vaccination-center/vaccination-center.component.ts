import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {

  center: VaccinationCenter = {
    id:1, 
    name:"Hôpital Central", 
    address: "Rue Lionnois", 
    postalCode: "54000", 
    city: "Nancy"
  }   

  constructor() { }

  ngOnInit(): void { }

  clearName(){
    this.center.name = "";
  }
}
