import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from 'src/app/shared/constants';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

import { MainSection } from '../main.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  readonly MainSectionTabs: Array<MainSection> = [
    MainSection.AboutUs,
    MainSection.Mission,
    MainSection.Team,
    MainSection.Contact,
  ];

  constructor(private router: Router, private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
    });
  }

  launchApp() {
    this.router.navigate([AppRoutes.Tapestry]);
  }

  signIn() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  scrollTo(tab: MainSection) {
    console.log(tab);
    const el = document.getElementById(tab);

    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
