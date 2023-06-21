import { Component } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodmine';
  isShow=true;
  showHideNav(event: any){
    this.isShow= !(event instanceof LoginComponent);

  }
}
