import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeLinkIndex = -1;

  constructor() { }

  changeNavigationBar(i?) {
    if(i !== undefined){
      this.activeLinkIndex = i;
    }
    if(document.body.classList.contains("rtl")) {
      document.getElementsByClassName("mat-ink-bar")[0]['style'].right = (this.activeLinkIndex * 160).toString() + 'px';
      document.getElementsByClassName("mat-ink-bar")[0]['style'].left = 'auto';
    } else {
      document.getElementsByClassName("mat-ink-bar")[0]['style'].left = (this.activeLinkIndex * 160).toString() + 'px';
      document.getElementsByClassName("mat-ink-bar")[0]['style'].right = 'auto';
    }
  }
}
