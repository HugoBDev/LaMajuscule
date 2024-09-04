import { Component, Input } from '@angular/core';
import { ClientAdviceBlockComponent, ClientAdviceBlockProps } from '../client-advice-block/client-advice-block.component';

@Component({
  selector: 'app-client-advice',
  standalone: true,
  imports: [ClientAdviceBlockComponent],
  templateUrl: './client-advice.component.html',
  styleUrl: './client-advice.component.scss'
})
export class ClientAdviceComponent {
  @Input() contents! : ClientAdviceBlockProps[]
}
