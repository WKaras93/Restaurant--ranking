import { Component } from '@angular/core';

import { MainViewComponent } from '../main-view/main-view';
import { NavigationBarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [NavigationBarComponent, MainViewComponent],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class HomeComponent {

}
