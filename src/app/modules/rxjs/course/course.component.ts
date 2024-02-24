import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, Observable } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

import { Course } from "../../../core/models/rxjs/course";
import { Lesson } from "../../../core/models/rxjs/lesson";
import { CoursesService } from "../../../core/services/rxjs/courses.service";

interface CourseData {
  course: Course;
  lessons: Lesson[];
}
@Component({
  selector: "app-course",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  data$?: Observable<CourseData>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    const courseIdParam = this.route.snapshot.paramMap.get("courseId");
    const courseId = courseIdParam ? parseInt(courseIdParam, 10) : 0;
    const course$ = this.coursesService
      .loadCourseById(courseId)
      .pipe(startWith(null));
    const lessons$ = this.coursesService
      .loadAllCourseLessons(courseId)
      .pipe(startWith([]));

    this.data$ = combineLatest([course$, lessons$]).pipe(
      map(([course, lessons]) => ({ course, lessons })),
      tap(console.log)
    );
  }
}
