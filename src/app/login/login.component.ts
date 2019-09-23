import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private _location: Location) { }
  back() {
     this._location.back();
   }
  ngOnInit() {  }


}
