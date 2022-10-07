import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-payment-lists',
  templateUrl: './payment-lists.component.html',
  styleUrls: ['./payment-lists.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentListsComponent implements OnInit {
  paymentSelected: string = '';
  paymentOptions: { name: string; icon: string }[] = [
    {
      name: 'Apple Pay',
      icon: 'icon-apple-pay.png',
    },
    {
      name: 'Click to Pay',
      icon: 'icon-click-to-pay.svg',
    },
    {
      name: 'Google Pay',
      icon: 'icon-google-pay.svg',
    },
    {
      name: 'Add Credit/Debit Card',
      icon: 'icon-card-black.svg',
    },
    {
      name: 'Add Bank Account',
      icon: 'icon-card-blue.svg',
    },
  ];

  selectedIndex: number = 0;

  constructor() {}

  ngOnInit() {}

  selectTab(index: number): void {
    this.selectedIndex = index;
  }
}
