import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Category } from "../models/category";


@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  private categoriesSubject = new BehaviorSubject<Category[]>(
    [ 
      {
        name: 'Urgent',
        tasks: [],
        notes: [],
      },
      {
        name: 'Personal',
        tasks: [],
        notes: [],
      },
      {
        name: 'Work',
        tasks: [],
        notes: [],
      },
    ]);
  categories$ = this.categoriesSubject.asObservable();

  constructor() { }

  getCategories(): Category[] {
    return this.categoriesSubject.getValue();
  }

  addCategory(category: Category, oldCategories: Category[] | []) {
    const newCategories = [...oldCategories, category];
    this.categoriesSubject.next(newCategories);
  }

  removeCategory(category: Category, oldCategories: Category[] | []) {
    const newCategories = oldCategories.filter(oldCategory => oldCategory.name !== category.name);
    this.categoriesSubject.next(newCategories);
  }
}
