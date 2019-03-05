import { ValidatorFn } from '@angular/forms';
import { FormItem } from '../extensions/form-item';
import { VALIDATION_MESSAGES } from '../resources/validation-messages';

export function maxLenghtValidator(length: number): ValidatorFn {
  return (control: FormItem): {[key: string]: any} | null => {
    const value = control.value;

    if (value && value.length > length ) {
      return {field: control.name, error: VALIDATION_MESSAGES.maxLenght(length)};
    }

    return null;
  };
}

export function minLenghtValidator(length: number): ValidatorFn {
  return (control: FormItem): {[key: string]: any} | null => {
    const value = control.value;

    if ((value && value.length > 0) && value.length < length ) {
      return {field: control.name, error: VALIDATION_MESSAGES.minLenght(length)};
    }

    return null;
  };
}
