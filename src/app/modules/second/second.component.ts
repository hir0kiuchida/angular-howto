import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-second",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./second.component.html",
  styleUrl: "./second.component.scss",
})
export class SecondComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /** FirstComponentへナビゲート */
  goToFirst() {
    this.router.navigate(["first"]);
  }

  /**
   * Child-BComponentへナビゲート
   * this.route=今のURLから/child-bへnavigate
   */
  goToChildB() {
    this.router.navigate(["child-b"], { relativeTo: this.route });
  }
}
