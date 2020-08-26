import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}
