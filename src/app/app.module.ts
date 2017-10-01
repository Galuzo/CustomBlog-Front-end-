import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostService} from './services/post.service';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdInputModule, MdChipsModule, MdGridListModule,  MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { ROUTING } from './router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

//import {ButtonTypesExample} from './button-types-example';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdInputModule,
    MdChipsModule,
    MdGridListModule,
    MdButtonModule,
    MdCardModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdIconModule,
    ROUTING
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
