import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  propertyBindingData: string = "my name is avinash";
  propertyBindingButton: string = "button";
  interpolationData: string = "string interpolation";
  clspan: number = 2;
  isChange: boolean = false;
  onClick() {
    this.isChange = !this.isChange;
  }
  twoWay: string;
}
