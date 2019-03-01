import { Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormItem } from '../extensions/form-item';

export class InputComponent implements OnInit {

  @Input()
  public name: string;

  public control: FormItem;

  ngOnInit(): void {
    this.control = new FormItem(this.name);
  }
}
