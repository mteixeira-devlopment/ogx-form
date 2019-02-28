import { Component, AfterViewInit } from '@angular/core';
import { FormComponent } from './form-components';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends FormComponent implements AfterViewInit {
  title = 'ogx-form';

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.inputValidation('username', Validators.required);

    console.log('form -> ', this.form);
  }

  public submitForm(): void {
    this.submit();
    if (this.isValid()) {
      console.log('form validado!');
    }
    console.log('controls -> ', this._controls);
    console.log('validationResult -> ', this.validationResult);
  }
}
