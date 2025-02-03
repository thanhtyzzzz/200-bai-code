import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class',
  templateUrl: './binding-class.component.html',
  styleUrl: './binding-class.component.css'
})
export class BindingClassComponent {
  public success = "text-success";
  public error = "text-error";
  public primary = "text-primary";
  public normal = "text-normal";

  public multiClass = {
    "text-primary": true,
    "text-normal": true,
    "text-error": true
  };

  public complexClass = "text-complexity";
}