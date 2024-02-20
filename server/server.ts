import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";

import { getAllCourses, getCourseById } from "./get-courses.route";
import { loginUser } from "./login.route";
import { saveCourse } from "./save-course.route";
import { searchLessons } from "./search-lessons.route";

const app: Application = express();

app.use(bodyParser.json());

app.use(cors({ origin: true }));

app.route("/api/courses").get(getAllCourses);

app.route("/api/courses/:id").get(getCourseById);

app.route("/api/lessons").get(searchLessons);

app.route("/api/courses/:id").put(saveCourse);

app.route("/api/login").post(loginUser);

app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:9000");
});
