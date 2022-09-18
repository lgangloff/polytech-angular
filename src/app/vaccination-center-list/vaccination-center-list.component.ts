import { Component, OnInit } from '@angular/core';
import { CENTERS } from '../mock-vaccination-center';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {

  centers: VaccinationCenter[] = CENTERS;

  selected?: VaccinationCenter;

  constructor() { }

  ngOnInit(): void {
      
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }
}
