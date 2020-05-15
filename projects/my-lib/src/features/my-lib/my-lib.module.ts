import { NgModule } from "@angular/core";
import { MyLibComponent } from "./my-lib.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [MyLibComponent],
  imports: [CommonModule, BrowserModule],
  exports: [MyLibComponent],
})
export class MyLibModule {}
