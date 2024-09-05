import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

export interface Ambassador {
  id: string;
  image: string;
  name: string;
}

@Component({
  selector: 'app-ambassador',
  standalone: true,
  imports: [CarouselModule, ButtonModule,],
  templateUrl: './ambassador.component.html',
  styleUrl: './ambassador.component.scss'
})
export class AmbassadorComponent {
  ambassadors! : Ambassador[]

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
   
    this.ambassadors  = [
      {
        id: '1',
       image: 'https://images.unsplash.com/photo-1725034246126-a73525408934?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Hugo',
      },
      {
        id: '2',
       image: 'https://images.unsplash.com/photo-1725462566776-64eb9548e0bc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'margot',
      },
      {
        id: '3',
       image: 'https://images.unsplash.com/photo-1725429967564-cebd8d7a98d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ulysse',
      },
      {
        id: '4',
       image: 'https://images.unsplash.com/photo-1725429967564-cebd8d7a98d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ulysse',
      },
      {
        id: '5',
       image: 'https://images.unsplash.com/photo-1725429967564-cebd8d7a98d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ulysse',
      },
      {
        id: '6',
       image: 'https://images.unsplash.com/photo-1725429967564-cebd8d7a98d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ulysse',
      },
    ]


    this.responsiveOptions = [
      {
        breakpoint: '1360px',
        numVisible: 3,
        numScroll: 2,
      },
      {
        breakpoint: '990px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '540px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
