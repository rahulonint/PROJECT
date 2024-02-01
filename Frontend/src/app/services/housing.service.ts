import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {}

  getAllProperties(){
    return this.http.get('data/properties.json')
    // .pipe(
    //   map(data => {
    //     const propertiesArray: Array<IProperty> = [];
    //     for (const id in data) {
    //       if (data.hasOwnProperty(id) ) {
    //         propertiesArray.push(propertiesArray.push(data[id as keyof object]));
    //       }
    //     }
    //     return propertiesArray;
    //   })
    // );
  }
}
