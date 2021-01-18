import { Injectable } from "@angular/core";
import { User } from "src/app/model/user-model";
@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  constructor() {}
  private userData: User[] = [
    new User(
      "Ahmet68",
      "Ahmet",
      "Onay",
      "2011-02-02",
      "ahmet68onay@gmail.com",
      btoa("password1")
    ),
    new User(
      "David2",
      "David",
      "Lucic",
      "2008-12-12",
      "david@gmail.com",
      btoa("david1891")
    ),
  ];

  addUser(user: User) {
    this.userData.push(user);
  }
  public getUsers(): User[] {
    return this.userData;
  }
}
