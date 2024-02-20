import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { Lesson } from "../../core/models/lesson";
import { SafeUrlPipe } from "../../shared/pipes/safe-url.pipe";

@Component({
  selector: "app-lesson",
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"],
})
export class LessonComponent {
  @Input() lesson: Lesson | null = null;
}
