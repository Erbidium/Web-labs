import {Component} from '@angular/core';
import {IUser} from "./models/IUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  private readonly USERS_COUNT = 40;

  users: IUser[] = [];

  async downloadUsers() {
    let response = await fetch(`https://randomuser.me/api?` + new URLSearchParams({
      results: this.USERS_COUNT.toString()
    }));
    this.users = (await response.json()).results;
  }
}
