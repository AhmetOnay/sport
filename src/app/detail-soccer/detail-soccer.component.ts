import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SoccerService } from "../../../services/soccer.service";
import { Soccer } from "../model/soccer";

@Component({
  selector: "app-detail-soccer",
  templateUrl: "./detail-soccer.component.html",
  styleUrls: ["./detail-soccer.component.scss"],
})
export class DetailSoccerComponent implements OnInit {
  SoccerList: any = [];
  soccerModel: Soccer = new Soccer();

  ngOnInit() {}

  constructor(
    private actRoute: ActivatedRoute,
    public soccerService: SoccerService
  ) {
    var id = this.actRoute.snapshot.paramMap.get("id");
    this.soccerService.GetSoccer(id).subscribe((data) => {
      this.soccerModel.name = data.name;
      this.soccerModel.height = data.height;
      this.soccerModel.weight = data.weight;
      this.soccerModel.salary = data.salary;
      this.soccerModel.birthday = data.birthday;
    });
  }
}
