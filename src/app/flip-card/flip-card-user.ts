import { Component } from '@angular/core';

@Component({
  selector: 'flip-card-user',
  template: `
   <div class="flip-card-user">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardUserComponent { }
