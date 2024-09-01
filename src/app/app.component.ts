import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VioletStarComponent } from './components/violet-star/violet-star.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavBarComponent,
    CommunicationComponent,
    BenefitsComponent
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
  benefitsContents : string[] = [
    'Expertise',
    'Gain de temps',
    'Regard extérieur',
    'Cohérence et qualité',
    'Optimisation',
    'Diversité de contenus',
  ]
}
