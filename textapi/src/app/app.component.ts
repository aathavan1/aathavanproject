import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";
import { isLogin } from './appconstant.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  isLog = false;

  setVisibl(isVisi: boolean) {
    this.isLog = isVisi;
  }
  title = 'textapi';
}
