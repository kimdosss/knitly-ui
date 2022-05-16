import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tapestry',
  templateUrl: './tapestry.component.html',
  styleUrls: ['./tapestry.component.scss'],
})
export class TapestryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickSetup() {
    this.router.navigate(['setup']);
  }
}
