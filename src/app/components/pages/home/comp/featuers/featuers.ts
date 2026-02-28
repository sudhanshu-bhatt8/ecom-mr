import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-featuers',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './featuers.html',
  styleUrl: './featuers.scss',
})
export class Featuers {
  features: Feature[] = [
    {
      icon: 'local_shipping',
      title: 'Free Shipping',
      description: 'For invoices over $1,500',
    },
    {
      icon: 'payments',
      title: 'Cash Back',
      description: 'When paying for products via Dasun Wallet',
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'When something goes wrong',
    },
  ];
}
