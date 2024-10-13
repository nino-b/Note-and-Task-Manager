import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { DragDropService } from '../../shared/drag-drop.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [DragDropModule, CommonModule, RouterModule],
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
    this.dragDrop.drop(event.previousIndex, event.currentIndex);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}