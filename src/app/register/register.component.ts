import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "services/data-service.service";
import { NgForm } from "@angular/forms";
import { User } from "../model/user-model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private service: DataServiceService) {}

  ngOnInit() {}
  onSubmit(f: NgForm) {
    let user: User = {
      username: f.value.username,
      firstname: f.value.firstname,
      lastname: f.value.lastname,
      birthday: f.value.birthday,
      email: f.value.email,
      password: btoa(f.value.password),
    };
    this.service.addUser(user);
    this.service.getUsers().forEach((element) => {
      console.log(
        element.username +
          " " +
          element.email +
          " " +
          element.password +
          btoa("Hallo")
      );
    });
  }
}
