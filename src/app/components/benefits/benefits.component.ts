import { Component, Input } from '@angular/core';
import { CircleComponent } from '../circle/circle.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CircleComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  @Input()contents: string[] = [];
}
