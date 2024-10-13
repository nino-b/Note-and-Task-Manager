import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent implements OnInit {
  categories: string[] = [];

  ngOnInit(): void {
    
  }
}
