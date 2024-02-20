import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { Observable } from "rxjs";

import { Course } from "../../core/models/course";
import { CoursesStore } from "../../core/services/courses.store";
import { CoursesCardListComponent } from "../courses-card-list/courses-card-list.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, MatTab, MatTabGroup, CoursesCardListComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  beginnerCourses$!: Observable<Course[]>;
  advancedCourses$!: Observable<Course[]>;

  constructor(private coursesStore: CoursesStore) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");
    this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");
  }
}
