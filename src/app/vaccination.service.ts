import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
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
