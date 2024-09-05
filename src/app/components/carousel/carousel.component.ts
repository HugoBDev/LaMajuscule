import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

export interface Ambassador {
  imgUrl: string;
  name: string;
}
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  responsiveOptions: any[] | undefined;

  products: Ambassador[] = [
    {
      imgUrl:
        'https://images.unsplash.com/photo-1724271361924-ad07d11d4add?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'BLABLABLA',
    },
    {
      imgUrl:
        'https://plus.unsplash.com/premium_photo-1696949623454-120bee8b1c5c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Sea Turtle',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1724271361924-ad07d11d4add?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'TEST 1',
    },
    {
      imgUrl:
        'https://plus.unsplash.com/premium_photo-1696949623454-120bee8b1c5c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'TEST AGDZAGD',
    },
  ];

  ngOInIt() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
