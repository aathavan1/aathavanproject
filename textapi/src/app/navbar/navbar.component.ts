import { Component, OnInit } from '@angular/core';
import { operCode } from '../appconstant'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  operco: number = 0

  ngOnInit(): void {
    this.operco = operCode;
  }


}
