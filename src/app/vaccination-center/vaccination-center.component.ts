import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {

  center?: VaccinationCenter;

  constructor(
    private route: ActivatedRoute, 
    private service: VaccinationService,    
    private location: Location) { }

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.center = this.service.getVaccinationCenterById(id);
  }

  delete(){
    if (this.center){
      this.service.deleteVaccinationCenter(this.center);
      this.location.back();
    }
  }

  clearName(){
    this.center!.name = "";
  }
}
