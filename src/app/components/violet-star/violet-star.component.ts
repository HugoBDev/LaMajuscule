import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-violet-star',
  standalone: true,
  imports: [],
  templateUrl: './violet-star.component.html',
  styleUrl: './violet-star.component.scss',
})
export class VioletStarComponent {
  @Input() content!: string;
}
