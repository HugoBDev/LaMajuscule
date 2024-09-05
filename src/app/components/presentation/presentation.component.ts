import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
@Input() contents!: string[] 
}
