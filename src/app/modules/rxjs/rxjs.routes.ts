import { AboutComponent } from "./about/about.component";
import { CourseComponent } from "./course/course.component";
import { LoginComponent } from "./login/login.component";
import { RxjsComponent } from "./rxjs.component";
import { SearchLessonsComponent } from "./search-lessons/search-lessons.component";

export default [
  {
    path: "",
    component: RxjsComponent,
  },
  {
    path: "search-lessons",
    component: SearchLessonsComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "courses/:courseId",
    component: CourseComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];
