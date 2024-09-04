import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { CommunicationComponent } from './components/communication/communication.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ClientAdviceBlockProps } from './components/client-advice-block/client-advice-block.component';
import { ClientAdviceComponent } from "./components/client-advice/client-advice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavBarComponent,
    CommunicationComponent,
    BenefitsComponent,
    ClientAdviceComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  communicationContents: string[] = [
    'Rédaction print',
    'Rédaction web',
    'Réseaux sociaux',
    'Photos et vidéos',
  ];
  benefitsContents: string[] = [
    'Expertise',
    'Gain de temps',
    'Regard extérieur',
    'Cohérence et qualité',
    'Optimisation',
    'Diversité de contenus',
  ];
  clientAdviceContents: ClientAdviceBlockProps[] = [
    {
      content:
        "Je recommande à 1000%. J'ai rencontré Cléa, la créatrice de l'Agence la Majuscule lors de l'écriture d'un article de presse au sujet de mon entreprise. Et ce fût une superbe rencontre ! Et depuis quelques temps elle travaille pour moi et gère une bonne partie de ma communication (Maison Levasseur & Les Brunchs de Clairette). Et une seule chose à dire : je suis ravie de son travail ! Son regard jeune & son talent d'écriture = une communication de qualité !",
      clientName: 'Claire Levasseur',
    },
    {
      content:
        'J’ai rencontré Clea il y a quelques temps qui m’a expliqué son concept.. j’ai tout de suite été séduite.. J’avais besoin de quelqu’un sur qui me reposer pour les réseaux sociaux de notre entreprise.. elle a su capter notre identité et l’a respecté.. Elle est très discrète quand elle vient prendre des images.. Bref foncez si vous hésitez, ce sera sans regret …',
      clientName: 'Cindy Vare',
    },
  ];
}
