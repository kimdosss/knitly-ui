import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent implements OnInit {
  currentYear: string;
  constructor() {}

  ngOnInit(): void {
    this.currentYear = `${dayjs().year()}`;
  }
}
