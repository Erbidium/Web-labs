import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { addressRegex, birthDateRegex, facultyRegex, phoneRegex, pibRegex } from "./validation";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {
  public task1Form = new FormGroup(
    {
      pib: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(pibRegex),
        ]
      ),
      phone: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(phoneRegex),
        ]
      ),
      faculty: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(facultyRegex),
        ],
      ),
      birthDate: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(birthDateRegex),
        ],
      ),
      address: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(addressRegex),
        ],
      ),
    },
    {
      updateOn: 'blur',
    }
  );

  onFormClick() {
    if (this.task1Form.valid) {
      const pib = this.task1Form.value.pib!;
      const phone = this.task1Form.value.phone!;
      const faculty = this.task1Form.value.faculty!;
      const birthDate = this.task1Form.value.birthDate!;
      const address = this.task1Form.value.address!;

      alert(`ПІБ: ${pib}\nТелефон: ${phone}\nФакультет: ${faculty}\nДата народження: ${birthDate}\nАдреса: ${address}`);
    }
  }
}
