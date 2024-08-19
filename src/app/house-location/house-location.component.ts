import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocation } from '../house-location';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="listing">
   <img [src]="housingLocation.photo" [alt]="housingLocation.name" class="listing-photo" alt="">
   <h2 class="listing-heading">{{housingLocation.name}}</h2>
   <p class="listing-location">{{housingLocation.state}} {{housingLocation.city}}</p>
</section>
  `,
  styleUrls: ['./house-location.component.css']
})
export class HouseLocationComponent {
@Input() housingLocation!:HouseLocation
}
