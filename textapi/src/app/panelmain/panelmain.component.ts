import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-panelmain',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './panelmain.component.html',
  styleUrl: './panelmain.component.css'
})
export class PanelmainComponent {

}
