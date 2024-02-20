import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatFormField } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { Observable } from "rxjs";

import { Lesson } from "../../core/models/lesson";
import { CoursesService } from "../../core/services/courses.service";
import { LessonComponent } from "../lesson/lesson.component";

@Component({
  selector: "app-course",
  standalone: true,
  imports: [CommonModule, MatIcon, MatFormField, LessonComponent],
  templateUrl: "./search-lessons.component.html",
  styleUrls: ["./search-lessons.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLessonsComponent {
  // serviceではなくcomponentにデータを持つと、
  // ページを離れた際(componentをdestroy)にデータは初期化される。
  // auth.store.tsやcourses.store.tsとの違い。
  searchResults$?: Observable<Lesson[]>;
  activeLesson: Lesson | null = null;

  constructor(private coursesService: CoursesService) {}

  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
}
