import { FormItem } from './extensions/form-item';
import { ViewChild, AfterViewInit } from '@angular/core';
import { OgxFormComponent } from './components/ogx-form/ogx-form.component';
import { ValidatorFn } from '@angular/forms';

export abstract class FormComponent implements AfterViewInit {
  @ViewChild(OgxFormComponent)
  protected form: OgxFormComponent;

  public _controls: FormItem[];

  protected validationResult: string[];

  ngAfterViewInit(): void {
    this._controls = this.form.inputs.map(i => i.control);
    console.log('afterviewinit', this._controls);
  }

  protected submit(): void {
    this.validationResult = [];
    this._validate();
  }

  private _validate(): void {
    Object.keys(this._controls).forEach(controlKey => {
      const control: FormItem = this._controls[controlKey];
      control.updateValueAndValidity();
        if (control.invalid) {
          console.log('control.errors', control.errors);
          this.validationResult.push('a');
        }
    });
  }

  protected isValid(): boolean {
    console.log('this.validationResult.length', this.validationResult.length);
    return this.validationResult.length === 0;
  }

  protected inputValidation(controlName: string, validation: ValidatorFn | ValidatorFn[]) {
    const control = this._controls.find(c => c.name === controlName);
    control.setValidators(validation);

    return this;
  }
}
