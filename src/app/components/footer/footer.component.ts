import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/utils/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isRtl = false;
  lang = "English";
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }
  changeDirecation() {
    this.isRtl = !this.isRtl;
    document.body.dir = this.isRtl === true ? 'rtl' : 'ltr';
    if (this.isRtl) {
      document.body.classList.add("rtl");
      this.lang = 'Arabic';
    } else {
      document.body.classList.remove("rtl");
      this.lang = 'English';
    }
    this.navigationService.changeNavigationBar();
  }

}
