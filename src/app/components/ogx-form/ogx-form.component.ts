import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { OgxInputComponent } from '../ogx-input/ogx-input.component';
import { InputComponent } from 'src/app/core/input-component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ogx-form',
  template: `
    <form>
      <ng-content></ng-content>
    </form>`
})
export class OgxFormComponent implements AfterViewInit {

  @ContentChildren(InputComponent)
  private _inputQuery: QueryList<InputComponent>;

  private _inputs: OgxInputComponent[];

  get inputs(): OgxInputComponent[] {
    return this._inputs;
  }

  ngAfterViewInit() {
    this._inputs = this._inputQuery.toArray();
  }
}
