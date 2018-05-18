import { Component, OnInit } from "@angular/core";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Angular 5 / Node.js fullstack app";

  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  getUsers() {
    this.usersService.getUsers().subscribe(res => {
      debugger;
    });
  }
}
