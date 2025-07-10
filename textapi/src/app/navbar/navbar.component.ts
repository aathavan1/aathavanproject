import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  operco!: string;

  router:Router=inject(Router)

  ngOnInit(): void {
    this.operco = localStorage.getItem('opercode')!;
  }

  logOut(){
    localStorage.setItem('opercode','0')
    this.router.navigate(['/'])

  }

}
