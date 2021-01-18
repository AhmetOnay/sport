import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AddSoccerComponent } from "./add-soccer/add-soccer.component";
import { EditSoccerComponent } from "./edit-soccer/edit-soccer.component";
import { SoccerListComponent } from "./soccer-list/soccer-list.component";
import { HttpClientModule } from "@angular/common/http";
import { SoccerService } from "../../services/soccer.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DetailSoccerComponent } from "./detail-soccer/detail-soccer.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { StartComponent } from "./start/start.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddSoccerComponent,
    EditSoccerComponent,
    SoccerListComponent,
    DetailSoccerComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
