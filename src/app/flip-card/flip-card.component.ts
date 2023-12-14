import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit{
  ngOnInit(): void {
    
  }

  toggleProperty = false;

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

}
