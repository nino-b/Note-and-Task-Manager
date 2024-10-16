import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild('search') search!: ElementRef;
  searchText: string = '';

  onClear(event: Event) {
    event.preventDefault();
    const input = this.search.nativeElement;
    input.value = '';
    input.focus();
  }
}
