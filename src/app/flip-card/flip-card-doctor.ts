import { Component } from '@angular/core';

@Component({
  selector: 'flip-card-doctor',
  template: `
   <div class="flip-card-doctor">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardDoctorComponent { }
