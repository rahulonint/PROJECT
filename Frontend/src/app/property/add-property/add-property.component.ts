import { Route, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/IProperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: '',
    // readyToMove: null,
    description: '',
  };

  addPropertyForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      // BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required],
      // }),

      // PriceInfo: this.fb.group({
      //   Price: [null, Validators.required],
      //   BuiltArea: [null, Validators.required],
      //   CarpetArea: [null],
      //   Security: [0],
      //   Maintenance: [0],
      // }),

      // AddressInfo: this.fb.group({
      //   FloorNo: [null],
      //   TotalFloor: [null],
      //   Address: [null, Validators.required],
      //   LandMark: [null],
      // }),

      // OtherInfo: this.fb.group({
      //   RTM: [null, Validators.required],
      //   PossessionOn: [null, Validators.required],
      //   AOP: [null],
      //   Gated: [null],
      //   MainEntrance: [null],
      //   Description: [null],
      // }),
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit(form: NgForm) {
    console.log('SellRent=' + this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
