import { Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormItem } from '../extensions/form-item';

export abstract class InputComponent implements OnInit {

  @Input()
  public name: string;

  public control: FormItem;

  ngOnInit(): void {
    this.control = new FormItem(this.name);
    this.afterInputInit();
  }

  protected abstract afterInputInit();
}
