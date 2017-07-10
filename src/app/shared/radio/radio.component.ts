import { RadioOption } from './radio-option.model';

import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;
  onchage: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onchage(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onchage = fn;
  }

  registerOnTouched(fn: any): void {/*Nao utilizado no exemplo*/ }

  setDisabledState?(isDisabled: boolean): void { /*Nao utilizado no exemplo*/ }
}
