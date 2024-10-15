import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { DragDropService } from '../../shared/DragDropService';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [DragDropModule, CommonModule, RouterModule, SearchComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;

  constructor(private dragDrop: DragDropService) {}

  ngOnInit() {
    this.categories = this.dragDrop.getCategories();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}