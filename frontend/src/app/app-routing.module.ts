import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { ChatComponent } from "./chat/chat.component";
import { JobPostingsComponent } from "./job-postings/job-postings.component";
import { MyVoltComponent } from "./my-volt/my-volt.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ServicesComponent } from "./services/services.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "authentication", component: AuthenticationComponent},
  {path: "chat", component: ChatComponent},
  {path: "job-postings", component: JobPostingsComponent},
  {path: "my-volt", component: MyVoltComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "users", component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
