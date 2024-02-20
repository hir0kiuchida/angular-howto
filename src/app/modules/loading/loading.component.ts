import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

import { LoadingService } from "./loading.service";

@Component({
  selector: "app-loading",
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
