import { Component, OnInit } from '@angular/core';
import { AppTypes } from 'src/app/shared/constants';

export enum MainSection {
  AboutUs = 'About Us',
  Team = 'Team',
  Mission = 'Mission',
  Contact = 'Contact',
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  readonly AppTypes = AppTypes;
  readonly MainSection = MainSection;

  constructor() {}

  ngOnInit(): void {}
}
