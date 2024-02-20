import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { MessagesService } from "./messages.service";

@Component({
  selector: "app-messages",
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  showMessages = false;
  errors$?: Observable<string[]>;

  constructor(private messagesService: MessagesService) {
    console.log("created messages component");
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => {
        this.showMessages = true;
      })
    );
  }

  onClose() {
    this.showMessages = false;
  }
}
