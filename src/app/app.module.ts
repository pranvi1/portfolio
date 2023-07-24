import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { ModelsComponent } from './models/models.component';
import { SkiilsComponent } from './skiils/skiils.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContactComponent,
    PersonalInformationComponent,
    EducationComponent,
    ModelsComponent,
    SkiilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
