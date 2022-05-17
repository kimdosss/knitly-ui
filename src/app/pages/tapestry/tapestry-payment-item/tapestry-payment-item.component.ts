import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tapestry-payment-item',
  templateUrl: './tapestry-payment-item.component.html',
  styleUrls: ['./tapestry-payment-item.component.scss'],
})
export class TapestryPaymentItemComponent implements OnInit {
  @Input() name: string;
  @Input() selected: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
