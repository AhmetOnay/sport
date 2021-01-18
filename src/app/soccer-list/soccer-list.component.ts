import { Component, OnInit } from "@angular/core";
import { SoccerService } from "../../../services/soccer.service";
import { Soccer } from "../model/soccer";

@Component({
  selector: "app-soccer-list",
  templateUrl: "./soccer-list.component.html",
  styleUrls: ["./soccer-list.component.scss"],
})
export class SoccerListComponent implements OnInit {
  SoccerList: any = [];
  selectedSoccer: Soccer = null;
  ngOnInit() {
    this.loadSoccer();
  }

  constructor(public soccerService: SoccerService) {}

  // Soccer list
  loadSoccer() {
    return this.soccerService.GetSoccers().subscribe((data: {}) => {
      this.SoccerList = data;
    });
  }

  // Delete Soccer
  deleteSoccer(data) {
    var index = (index = this.SoccerList.map((x) => {
      return x.name;
    }).indexOf(data.name));
    return this.soccerService.DeleteSoccer(data.id).subscribe((res) => {
      this.SoccerList.splice(index, 1);
      console.log("Soccer Player deleted!");
    });
  }
  selectSoccer(selected: Soccer) {
    console.log("clicked Soccer" + selected.id);
    this.selectedSoccer = selected;
  }

  onSoccerModified(modified: boolean) {
    console.log("Soccer modified");
    location.reload();
  }
}
