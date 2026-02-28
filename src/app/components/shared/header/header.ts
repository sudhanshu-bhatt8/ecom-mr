import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchSection } from './search-section/search-section';
import { Category } from './category/category';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, SearchSection, Category],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
