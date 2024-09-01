import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss'
})
export class CircleComponent {
  @Input() content!: string;
}
