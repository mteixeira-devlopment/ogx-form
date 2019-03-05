import { ViewChild, AfterViewInit } from '@angular/core';

import { ValidatorFn } from '@angular/forms';
import { FormItem } from '../extensions/form-item';
import { OgxFormComponent } from '../components/ogx-form/ogx-form.component';

export abstract class FormComponent implements AfterViewInit {

  @ViewChild(OgxFormComponent)
  protected form: OgxFormComponent;

  private _controls: FormItem[];

  protected validationResult: string[];

  ngAfterViewInit(): void {
    this._controls = this.form.inputs.map(i => i.control);
    this.afterFormInit();
  }

  /**
  * Correcly lifecycle. When every component inside the form is ready to action.
  */
  protected abstract afterFormInit();

  /**
  * Get every control on the form.
  */
  get controls(): FormItem[] {
    return this._controls;
  }

  /**
  * Get a single control.
  */
  protected getControl(controlName: string) {
    return this._controls.find(c => c.name === controlName);
  }

  /**
  * Validates the form and populates the array of errors.
  */
  protected submit(): void {
    this.validationResult = [];
    this._validate();
  }

  private _validate(): void {
    Object.keys(this._controls).forEach(controlKey => {
      const control: FormItem = this._controls[controlKey];
      control.updateValueAndValidity();
        if (control.invalid) {
          const error = control.errors;
          this.validationResult.push(`${error.field}: ${error.error}`);
          console.log(this.validationResult);
        }
    });
  }

  /**
  * Tell if form is valid or not.
  */
  protected isValid(): boolean {
    return this.validationResult.length === 0;
  }

  /**
  * Add a validation to input.
  *
  * @param controlName: Input who will receive validation.
  * @param validator: One or few validators to input.
  */
  protected inputValidation(controlName: string, validator: ValidatorFn | ValidatorFn[]) {
    const control = this.getControl(controlName);
    control.setValidators(validator);

    return this;
  }

  /**
  * Map form values to typed object.
  *
  * @param creator: Creator type to get new typed object.
  */
  protected map<T>(creator: (new () => T)): T {
    const obj = {};

    Object.keys(this.controls).forEach(controlKey => {
      const control: FormItem = (this.controls[controlKey]);
      obj[control.name] = control.value;
    });

    const typedObj = new creator();
    Object.assign(typedObj, obj);

    return typedObj;
  }

  /**
  * Fill form fields with object values.
  *
  * @param objToCopy: Object to copy values to form fields.
  */
  protected fill(objToCopy: any): void {
    Object.keys(objToCopy).forEach(propertyKey => {
      const control = this.controls.find(c => c.name === propertyKey);
      if (control) {
        control.setValue(objToCopy[propertyKey]);
      }
    });
  }
}
