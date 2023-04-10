import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgEleDirective } from './directive/ng-ele.directive';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataComponent } from './api-data/api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserDetailsComponent,
    NgEleDirective,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
