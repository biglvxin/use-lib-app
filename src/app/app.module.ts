import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyFirstTableModule} from '@lx-custom-ui/test-commonlib-ui'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFirstTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
