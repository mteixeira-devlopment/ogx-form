import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OgxFormComponent } from './components/ogx-form/ogx-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OgxInputComponent } from './components/ogx-input/ogx-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OgxFormComponent,
    OgxInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
