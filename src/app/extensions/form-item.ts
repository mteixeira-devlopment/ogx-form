import { FormControl } from '@angular/forms';

export class FormItem extends FormControl {

  public submited = false;

  private _oldValue: any;
  private _postActions: ((v: any) => void);

  private _entryValidate: ((v: any, oldValue: any) => boolean) = (v: any) => true;

  constructor(public name: string) {
    super();
    console.log('in formitem -> ', name);
    this.setEntryValue();
  }

  public setEntryValue(): void {
    this.valueChanges.subscribe(v => {
      if (!this._entryValidate(v, this._oldValue)) {
        this.setValue(this._oldValue);
      } else {
        this._oldValue = this.value;
        if (this._postActions) {
          this._postActions(v);
        }
      }
    });
  }

  public setEntryValidate(validateEntry: ((v: any, oldValue: any) => boolean)) {
    this._entryValidate = validateEntry;
  }

  public setPostActions(postActions: ((v: any) => void)) {
    this._postActions = postActions;
  }
}
