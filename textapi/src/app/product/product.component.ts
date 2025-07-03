import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements AfterViewInit {

  @ViewChild('proGroup') proGroup!: ElementRef;


  ngAfterViewInit(): void {
  }

  changeFoc(){
    console.log('qwdqd')
    this.proGroup.nativeElement.focus();
  }

}
