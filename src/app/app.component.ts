import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { CommunicationComponent } from './components/communication/communication.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ClientAdviceBlockProps } from './components/client-advice-block/client-advice-block.component';
import { ClientAdviceComponent } from "./components/client-advice/client-advice.component";

import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavBarComponent,
    CommunicationComponent,
    BenefitsComponent,
    ClientAdviceComponent,
    AmbassadorComponent,
    PresentationComponent
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
  presentationContents: string[] = [
    'Je m’appelle <strong> Cléa Ivain</strong> et je suis originaire d’Amiens. Depuis toujours, les mots sont ma grande passion. Petite, je passais des heures à inventer des histoires, à écrire des livres que j’illustrais moi-même. Ces souvenirs d’enfance m’ont guidée jusqu’ici, à la création de La Majuscule.',
    'Après un parcours en gestion et marketing, avec une spécialisation en webmarketing, puis une formation en conception-rédaction à Paris, j’ai ressenti le besoin de suivre mon propre chemin. C’est ainsi qu’en février 2024, j’ai décidé de me lancer dans l’aventure entrepreneuriale, en créant La Majuscule, une agence de communication qui me ressemble.',
    'La Majuscule, c’est avant tout une histoire de passion, de créativité et de proximité. Mon objectif est simple : vous accompagner dans vos projets avec bienveillance, écoute et partage. Je mets un point d’honneur à ce que chaque texte, chaque photo, et chaque vidéo reflètent exactement ce que vous avez en tête. C’est pourquoi je suis toujours à l’écoute de vos besoins et prête à apporter toutes les modifications nécessaires jusqu’à ce que vous soyez pleinement satisfait.',
    'Ce qui compte le plus pour moi, c’est la relation de confiance que nous allons construire ensemble. Je tiens à ce que chaque collaboration soit une véritable rencontre, un échange d’idées et de visions. Je crois fermement que c’est en travaillant main dans la main que nous pourrons donner vie à vos projets et les rendre uniques.',
    'Merci de votre confiance. Au plaisir de collaborer avec vous.',
    'Cléa Ivain – La Majuscule, Amiens.'
  ];
}
