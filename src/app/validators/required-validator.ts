import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormItem } from '../extensions/form-item';
import { VALIDATION_MESSAGES } from '../resources/validation-messages';

export function requiredValidator(): ValidatorFn {
  return (control: FormItem): {[key: string]: any} | null => {
    const value = control.value;

    if (!value || value.length === 0) {
      return {field: control.name, error: VALIDATION_MESSAGES.required};
    }

    return null;
  };
}

