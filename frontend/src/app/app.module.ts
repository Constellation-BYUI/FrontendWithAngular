import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { ChatComponent } from './chat/chat.component';
import { MyVoltComponent } from './my-volt/my-volt.component';
import { UsersComponent } from './users/users.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    JobPostingsComponent,
    ChatComponent,
    MyVoltComponent,
    UsersComponent,
    AuthenticationComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
