
import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties!: any;
  // sellRent = 1;
  constructor(private housingService: HousingService, private route: ActivatedRoute) {}

  ngOnInit() {
    // if(this.route.snapshot.url.toString()){
    //   this.sellRent = 2;
    // }

    this.housingService.getAllProperties().subscribe(
      data=>{
        this.properties=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  //   this.http.get('data/properties.json').subscribe((data) => {
  //     console.log(data);
  //     this.properties = data;});
  }
}
