import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service'
import { OperatorService } from '../service/operatorservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { product } from '../model/product'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-productview',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css'
})
export class ProductviewComponent implements OnInit {

  setVisibl: boolean = true;
  @ViewChild('proGroup') proGroup!: ElementRef;
  productService: ProductService = inject(ProductService);
  operatorService: OperatorService = inject(OperatorService);

  routerNav: Router = inject(Router)
  lstProduct!: product[];


  ngOnInit(): void {
    let opercod = localStorage.getItem('opercode')
    this.operatorService.checkOperator(opercod == null ? '0' : opercod)
      .subscribe(data => {
        if (data.length == 0) {
          window.alert('Invalid login')
          this.routerNav.navigate(['/']);
        }
      })

    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProductView().subscribe(
      data => {
        this.lstProduct = data
      }
    )

  }


  changeFoc() {
    this.proGroup.nativeElement.focus();
  }
}
