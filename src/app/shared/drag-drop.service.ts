import { Injectable } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  private categoriesSubject = new BehaviorSubject<string[]>(['Urgent', 'Work', 'Personal']);
  categories$ = this.categoriesSubject.asObservable();
  
  constructor() { }

/*   getCategories(): string[] {
    return this.categories;
  }

  addCategory(category: string) {
    this.categories.push(category);
  }

  drop(previousIndex: number, currentIndex: number ) {
    moveItemInArray(this.categories, previousIndex, currentIndex);
  } */
}
