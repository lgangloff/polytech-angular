import { Injectable } from '@angular/core';
import { CENTERS } from './mock-vaccination-center';
import { VaccinationCenter } from './vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor() { }

  getAllVaccinationCenter() : VaccinationCenter[]{
    return CENTERS;
  }

  getVaccinationCenterById(id: number): VaccinationCenter | undefined {
    return this.getAllVaccinationCenter().find(other=>other.id==id);
  }
  
  deleteVaccinationCenter(center: VaccinationCenter) {
    const index = CENTERS.indexOf(center, 0);
    if (index > -1) {
      CENTERS.splice(index, 1);
    }
  }
}
