import {
  Component,
  OnInit,
  NgZone,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { SoccerService } from "../../../services/soccer.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-soccer",
  templateUrl: "./edit-soccer.component.html",
  styleUrls: ["./edit-soccer.component.scss"],
})
export class EditSoccerComponent implements OnInit {
  @Input()
  id2: number;
  SoccerList: any = [];
  updateSoccerForm: FormGroup;

  @Output()
  soccerModified = new EventEmitter<boolean>();

  ngOnInit() {
    this.updateForm();
    this.initSoccerForm();
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("onChanges");
    this.initSoccerForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public soccerService: SoccerService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {}

  initSoccerForm() {
    var id = this.actRoute.snapshot.paramMap.get("id");
    if (id == null) {
      id = this.id2 + "";
    }
    this.soccerService.GetSoccer(id).subscribe((data) => {
      this.updateSoccerForm = this.fb.group({
        name: [data.name],
        height: [data.height],
        weight: [data.weight],
        birthday: [data.birthday],
        salary: [data.salary],
      });
    });
  }

  updateForm() {
    this.updateSoccerForm = this.fb.group({
      name: [""],
      height: [""],
      weight: [""],
      birthday: [""],
      salary: [""],
    });
  }

  submitForm() {
    var id = this.actRoute.snapshot.paramMap.get("id");
    if (id == null) {
      id = this.id2 + "";
    }
    this.soccerModified.emit(true);
    this.soccerService
      .UpdateSoccer(id, this.updateSoccerForm.value)
      .subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl("/soccerlist"));
      });
  }
}
