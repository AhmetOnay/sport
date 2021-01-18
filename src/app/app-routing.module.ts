import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddSoccerComponent } from "./add-soccer/add-soccer.component";
import { SoccerListComponent } from "./soccer-list/soccer-list.component";
import { EditSoccerComponent } from "./edit-soccer/edit-soccer.component";
import { DetailSoccerComponent } from "./detail-soccer/detail-soccer.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "soccer", component: AddSoccerComponent },
  { path: "soccerlist", component: SoccerListComponent },
  { path: "editsoccer/:id", component: EditSoccerComponent },
  { path: "detailsoccer/:id", component: DetailSoccerComponent },
  { path: "login", component: LoginComponent },
  { path: "addsoccer", component: AddSoccerComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
