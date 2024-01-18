import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    
  }

  @Input() property!: any;
}
