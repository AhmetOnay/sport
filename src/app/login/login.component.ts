import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataServiceService } from "services/data-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private service: DataServiceService) {}

  ngOnInit() {}
  onSubmit(f: NgForm) {
    this.service.getUsers().forEach((user) => {
      if (
        f.value.email === user.email &&
        f.value.password === atob(user.password)
      ) {
        console.log("I am in");
      }
    });
  }
}
