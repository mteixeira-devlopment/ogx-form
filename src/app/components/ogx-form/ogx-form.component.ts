import { InputComponent } from './../../core/input-component';
import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';

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

  private _inputs: InputComponent[];

  get inputs(): InputComponent[] {
    return this._inputs;
  }

  ngAfterViewInit() {
    this._inputs = this._inputQuery.toArray();
  }
}
