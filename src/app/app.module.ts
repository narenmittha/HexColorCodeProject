import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { BackColorSectionComponent } from './back-color-section/back-color-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSectionComponent,
    BackColorSectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
