import { Component, Inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from "@angular/material/datepicker";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatFormField } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";

import { Course } from "../../../core/models/rxjs/course";
import { CoursesStore } from "../../../core/services/rxjs/courses.store";
import { LoadingComponent } from "../loading/loading.component";
import { LoadingService } from "../loading/loading.service";
import { MessagesComponent } from "../messages/messages.component";
import { MessagesService } from "../messages/messages.service";

@Component({
  selector: "app-course-dialog",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatDialogContent,
    MatDialogActions,
    MatSelect,
    MatOption,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    LoadingComponent,
    MessagesComponent,
  ],
  templateUrl: "./course-dialog.component.html",
  styleUrls: ["./course-dialog.component.css"],
  providers: [LoadingService, MessagesService],
})
export class CourseDialogComponent {
  form: FormGroup;

  course: Course;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    private coursesStore: CoursesStore,
    @Inject(MAT_DIALOG_DATA) course: Course
  ) {
    this.course = course;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [new Date(), Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }

  save() {
    const changes = this.form.value;
    this.coursesStore.saveCourse(this.course.id, changes).subscribe();
    this.dialogRef.close(changes);
  }

  close() {
    this.dialogRef.close();
  }
}
