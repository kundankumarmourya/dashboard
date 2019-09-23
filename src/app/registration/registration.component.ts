import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'webcoderskull-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  constructor(private _location: Location) { }
  back()
  {
    this._location.back();
  }
  ngOnInit() { }


}
