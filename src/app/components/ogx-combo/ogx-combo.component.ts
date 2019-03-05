import { Component, Input } from '@angular/core';
import { InputComponent } from '../../core/input-component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ogx-combo',
  providers: [{
    provide: InputComponent,
    useExisting: OgxComboComponent
  }],
  template: `
    <select [formControl]="control">
      <option *ngFor="let o of options" [value]="o">{{o}}</option>
    </select>
  `
})
export class OgxComboComponent extends InputComponent {

  @Input()
  public options: string[];

  protected afterInputInit() {

  }
}
