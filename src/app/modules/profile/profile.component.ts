import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  /** app.route.tsの:userIdから値を取得 */
  @Input() userId!: string;
  /** app.routes.tsのdata.profileから値を取得 */
  @Input() profile!: boolean;
}
