import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import {GithubService} from './github.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [HttpModule, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
