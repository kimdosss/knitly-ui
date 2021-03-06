import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: string;
  constructor() {}

  ngOnInit(): void {
    this.currentYear = `${dayjs().year()}`;
  }
}
