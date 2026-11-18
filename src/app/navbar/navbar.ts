import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, MatIconModule, MatMenuModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavigationBarComponent {
  public isLogined = false;
  public isSearchOpen = false;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @Output() searchChange = new EventEmitter<string>();

  searchOpen = false;
  query = '';

  toggleSearch() {
    this.searchOpen ? this.closeSearch() : this.openSearch();
  }

  openSearch() {
    this.searchOpen = true;
    // wait for the bar to become interactive (inert is removed), then focus
    setTimeout(() => this.searchInput?.nativeElement.focus(), 50);
  }

  closeSearch() {
    this.searchOpen = false;
  }

  onSearchInput(event: Event) {
    this.query = (event.target as HTMLInputElement).value;
    this.searchChange.emit(this.query);
  }

  clearSearch() {
    this.query = '';
    this.searchChange.emit('');
    this.searchInput.nativeElement.focus();
  }
}
