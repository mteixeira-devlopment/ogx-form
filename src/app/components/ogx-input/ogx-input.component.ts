import { InputComponent } from './../../core/input-component';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ogx-input',
  providers: [{
    provide: InputComponent,
    useExisting: OgxInputComponent
  }],
  template: `
    <input [formControl]="control">
  `,
  styleUrls: ['./ogx-input.component.scss']
})
export class OgxInputComponent extends InputComponent implements OnInit {

  ngOnInit() {
    super.ngOnInit();
  }

}
