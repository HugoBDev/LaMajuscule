import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
isMobile : boolean = false
toggleMobile() { 
    this.isMobile = !this.isMobile
}


}
