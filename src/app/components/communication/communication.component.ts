import { Component, Input } from '@angular/core';
import { VioletStarComponent } from '../violet-star/violet-star.component';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [VioletStarComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})

export class CommunicationComponent {
  @Input()contents: string[] = [];

}
