import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { GetListUsersStateService } from './services/get-list-users-state.service';
import { GetUsersGitService } from './services/get-users-git.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetUsersGitService, GetListUsersStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
