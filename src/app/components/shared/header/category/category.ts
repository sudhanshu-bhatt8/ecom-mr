import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  label: string;
  route?: string;
  isHot?: boolean;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './category.html',
  styleUrls: ['./category.scss'],
})
export class Category {
  navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'New Product', route: '/new', isHot: true },
    { label: 'Promotion', route: '/promotion' },
    { label: 'Track Your Order', route: '/track' },
    { label: 'Sign In/Register', route: '/auth' },
  ];
}
