import { Component, OnInit, Input } from '@angular/core';
import { FormItem } from '../../extensions/form-item';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ogx-input',
  template: `
    <input [formControl]="control">
  `,
  styleUrls: ['./ogx-input.component.scss']
})
export class OgxInputComponent implements OnInit {

  @Input()
  public name: string;

  public control: FormItem;

  ngOnInit() {
    this.control = new FormItem(this.name);
  }

}
