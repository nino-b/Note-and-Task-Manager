import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  private categoriesSubject = new BehaviorSubject<string[]>(['Urgent', 'Work', 'Personal']);
  categories$ = this.categoriesSubject.asObservable();


  constructor() { }

  getCategories(): string[] {
    return this.categoriesSubject.getValue();
  }

  addCategory(category: string, oldCategories: string[] | []) {
    const newCategories = [...oldCategories, category];
    this.categoriesSubject.next(newCategories);
  }

  removeCategory(category: string, oldCategories: string[] | []) {
    const newCategories = oldCategories.filter(oldCategory => oldCategory !== category);
    this.categoriesSubject.next(newCategories);
  }
}
