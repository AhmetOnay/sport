import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SoccerService } from "../../../services/soccer.service";
@Component({
  selector: "app-add-soccer",
  templateUrl: "./add-soccer.component.html",
  styleUrls: ["./add-soccer.component.scss"],
})
export class AddSoccerComponent implements OnInit {
  soccerForm: FormGroup;
  soccerArry: any = [];
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public soccerService: SoccerService
  ) {}

  ngOnInit() {
    this.addIssue();
  }

  addIssue() {
    this.soccerForm = this.fb.group({
      name: [""],
      height: [""],
      weight: [""],
      birthday: [""],
      salary: [""],
    });
  }

  submitForm() {
    console.log("Submit");
    this.soccerService.CreateSoccer(this.soccerForm.value).subscribe((res) => {
      console.log("Soccer Player added!");
      this.ngZone.run(() => this.router.navigateByUrl("/soccerlist"));
    });
  }
}
