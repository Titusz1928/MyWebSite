import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminModeService {
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  setCanEdit(value: boolean): void {
    this.isAdminSubject.next(value);
  }
}
