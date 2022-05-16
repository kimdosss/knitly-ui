import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from 'src/app/shared/constants';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  launchApp() {
    this.router.navigate([AppRoutes.Tapestry]);
  }
}
