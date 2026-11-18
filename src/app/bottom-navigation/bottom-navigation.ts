import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-bottom-navigation',
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './bottom-navigation.html',
  styleUrl: './bottom-navigation.css',
})
export class BottomNavigationComponent {
  @Output() syncRequest = new EventEmitter<void>();
  isSyncing = false;

  onSync() {
    this.isSyncing = true;
    this.syncRequest.emit();

    setTimeout(() => {
      this.isSyncing = false;
    }, 1000);
  }

  toggleDisplayingPlaces() {
    console.log('Toggling displaying places');
  }
}
