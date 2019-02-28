import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { OgxInputComponent } from 'src/app/ogx-input/ogx-input.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ogx-form',
  template: `
    <form>
      <ng-content></ng-content>
    </form>`
})
export class OgxFormComponent implements AfterViewInit {

  @ContentChildren(OgxInputComponent)
  private _inputQuery: QueryList<OgxInputComponent>;

  private _inputs: OgxInputComponent[];

  get inputs(): OgxInputComponent[] {
    return this._inputs;
  }

  ngAfterViewInit() {
    this._inputs = this._inputQuery.toArray();
  }
}
