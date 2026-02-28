import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface FooterLink {
  label: string;
  highlight?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerColumns: FooterColumn[] = [
    {
      title: 'Contact',
      links: [
        { label: 'ftribe Co., Ltd' },
        { label: '1658 Rosewood Lane' },
        { label: 'New York city, NY' },
        { label: '212 929 9953', highlight: true },
        { label: 'admin@ftribe.com', highlight: true },
      ],
    },
    {
      title: 'Cooperation - Association',
      links: [
        { label: 'Operation Regulation of EC-Exchange' },
        { label: 'Return Policy' },
        { label: 'Privacy Policy' },
        { label: 'Selling With ftribe' },
      ],
    },
    {
      title: 'Customer Support',
      links: [
        { label: 'Hotline Customer Service' },
        { label: '212 929 9953', highlight: true },
        { label: 'Frequently asked Questions' },
        { label: 'Submit Support Request' },
        { label: 'Ordering Guide' },
        { label: 'Shipping Methods' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Installment Purchase Guide' },
        { label: 'Import Policy' },
        { label: 'Customer Support: customer@ftribe.com', highlight: true },
        { label: 'Security Error Report: admin@ftribe.com', highlight: true },
      ],
    },
  ];
}
