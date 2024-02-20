import { AboutComponent } from "../../../modules/about/about.component";
import { CourseComponent } from "../../../modules/course/course.component";
import { LoginComponent } from "../../../modules/login/login.component";
import { SearchLessonsComponent } from "../../../modules/search-lessons/search-lessons.component";
import { RxjsComponent } from "./rxjs.component";

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
