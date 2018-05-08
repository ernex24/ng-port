import { Component, OnInit } from '@angular/core';

declare function init_plugins();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    init_plugins();
  }
}
