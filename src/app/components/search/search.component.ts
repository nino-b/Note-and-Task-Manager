import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild('search') search!: ElementRef;

  onClear(event: Event) {
    event.preventDefault();
    const input = this.search.nativeElement;
    input.value = '';
    input.focus();
  }
}
