import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RouterLink } from "@angular/router";
import { filter, tap } from "rxjs/operators";

import { Course } from "../../core/models/course";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";

@Component({
  selector: "app-courses-card-list",
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
  ],
  templateUrl: "./courses-card-list.component.html",
  styleUrls: ["./courses-card-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCardListComponent {
  @Input() courses: Course[] = [];

  @Output() private coursesChanged = new EventEmitter();
  constructor(private dialog: MatDialog) {}

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter((val) => !!val),
        tap(() => this.coursesChanged.emit())
      )
      .subscribe();
  }
}
