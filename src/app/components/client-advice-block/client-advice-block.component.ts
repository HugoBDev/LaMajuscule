import { Component, Input } from '@angular/core';
export interface ClientAdviceBlockProps {
  content: string
  clientName: string
}
@Component({
  selector: 'app-client-advice-block',
  standalone: true,
  imports: [],
  templateUrl: './client-advice-block.component.html',
  styleUrl: './client-advice-block.component.scss'
})
export class ClientAdviceBlockComponent {
@Input() content!: ClientAdviceBlockProps
}
