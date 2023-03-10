import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.sass"],
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  logout() {}
}
