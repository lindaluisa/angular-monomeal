import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MonomealsComponent } from './monomeals/monomeals.component';
import { MonomealListComponent } from './monomeals/monomeal-list/monomeal-list.component';
import { MonomealDetailComponent } from './monomeals/monomeal-detail/monomeal-detail.component';
import { MonomealItemComponent } from './monomeals/monomeal-list/monomeal-item/monomeal-item.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackEditComponent } from './feedback-list/feedback-edit/feedback-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonomealsComponent,
    MonomealListComponent,
    MonomealDetailComponent,
    MonomealItemComponent,
    FeedbackListComponent,
    FeedbackEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
