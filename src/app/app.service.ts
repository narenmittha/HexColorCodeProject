import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  hexCodeSubject = new BehaviorSubject({value: ''});

  public setColor(data) {
    this.hexCodeSubject.next(data);
  }
}
