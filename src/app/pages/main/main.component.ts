import { Component, OnInit } from '@angular/core';
import { AppTypes } from 'src/app/shared/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  readonly AppTypes = AppTypes;
  constructor() {}

  ngOnInit(): void {}
}
