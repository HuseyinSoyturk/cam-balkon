import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getSinFromDegree(degree) {
    return Math.sin(degree * Math.PI / 180)
  }
  getCosFromDegree(degree) {
    return Math.cos(degree * Math.PI / 180)
  }
  getTanFromDegree(degree) {
    return Math.tan(degree * Math.PI / 180)
  }
  getCotFromDegree(degree) {
    return 1 / Math.tan(degree * Math.PI / 180)
  }
}
