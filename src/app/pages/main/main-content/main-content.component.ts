import { Component, Input, OnInit } from '@angular/core';
import { AppTypes } from 'src/app/shared/constants';
import { MainSection } from '../main.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  @Input() leftContent: boolean = true;
  @Input() themeType: AppTypes;
  @Input() sectionId?: MainSection;
  @Input() imgId?: string;

  readonly AppTypes = AppTypes;

  constructor() {}

  ngOnInit(): void {}
}
