import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { NavbarBlockComponent } from './navbar-block/navbar-block.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { PageComponent } from './page/page.component';
import { PadBlockComponent } from './pad-block/pad-block.component';
import { CardBlockComponent } from './card-block/card-block.component';
import { ContactFormBlockComponent } from './contact-form-block/contact-form-block.component';
import { ScrollBoxComponent } from './scroll-box/scroll-box.component';

@NgModule({
  declarations: [AppComponent, NavbarBlockComponent, IntroBlockComponent, AboutBlockComponent, PageComponent, PadBlockComponent, CardBlockComponent, ContactFormBlockComponent, ScrollBoxComponent],
  imports: [BrowserModule,FormsModule,HttpModule,Ng2PageScrollModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
