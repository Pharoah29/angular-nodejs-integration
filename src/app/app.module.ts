import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UsersService } from "./services/users.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
