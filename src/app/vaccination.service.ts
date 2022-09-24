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

}
