import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { FirstComponent } from "../../../modules/first/first.component";
import { SecondComponent } from "../../../modules/second/second.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FirstComponent,
    SecondComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  title = "angular-howto";
}
