import { Component } from '@angular/core';

import { MainViewComponent } from '../main-view/main-view';
import { NavigationBarComponent } from '../navbar/navbar';
import { BottomNavigationComponent } from '../bottom-navigation/bottom-navigation';

@Component({
  selector: 'app-home',
  imports: [BottomNavigationComponent, NavigationBarComponent, MainViewComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  public onSync() {
    console.log('Sync requested');
  }
}
