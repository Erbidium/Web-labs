import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {
  public task1Form = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]
      ),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(50),
        ]
      ),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          //Validators.pattern(passwordRegex),
        ],
      ),
      phone: new FormControl(
        '',
        [
          Validators.required,
          //Validators.pattern(phoneNumberRegex),
        ],
      ),
    },
    {
      updateOn: 'blur',
    }
  );

  onSignIn() {

  }
}
