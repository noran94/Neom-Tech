import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/utils/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router,
    private navigationService: NavigationService) {

    this.navLinks = [
      {
        label: 'My Dashboard',
        link: './dashboard',
        icon: 'fa-map-marker'
      }, {
        label: 'Education',
        link: './education',
        icon: 'fa-map-marker'
      }, {
        label: 'Certifications',
        link: './certification',
        icon: 'fa-map-marker'
      }, {
        label: 'Skills',
        link: './skills',
        icon: 'fa-map-marker'
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      this.navigationService.activeLinkIndex = this.activeLinkIndex;
    });
  }

  onClick(i) {
    this.navigationService.changeNavigationBar(i);
  }

}
