import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatCard, MatCardContent, MatCardTitle } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { Router } from "@angular/router";

import { AuthStore } from "../../../core/services/rxjs/auth.store";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthStore
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  login() {
    const val = this.form.value;
    this.auth.login(val.email, val.password).subscribe(
      () => this.router.navigateByUrl("/courses"),
      () => alert("Login has failed")
    );
  }
}
