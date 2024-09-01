import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VioletStarComponent } from './components/violet-star/violet-star.component';
import { CommunicationComponent } from './components/communication/communication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavBarComponent,
    VioletStarComponent,
    CommunicationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  communicationContents : string[] = [
    'Rédaction print',
    'Rédaction web',
    'Réseaux sociaux',
    'Photos et vidéos',
  ]
}
