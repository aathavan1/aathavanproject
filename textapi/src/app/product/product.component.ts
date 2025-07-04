import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../model/product';
import { ProductService } from '../service/product.service'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  setVisibl: boolean = true;
  @ViewChild('proGroup') proGroup!: ElementRef;
  productService: ProductService = inject(ProductService);

  productGroup: product[] = [];
  quality: product[] = [];
  style: product[] = [];
  size: product[] = [];
  sizegroup: product[] = [];
  product: product[] = [];
  brand: product[] = [];


  router: ActivatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    let opercode = this.router.snapshot.paramMap.get('id');
    this.loadProductGroup();
    console.log(opercode)
  }



  loadProductGroup() {
    this.productService.getProductGroup().subscribe(data => {
      this.productGroup = data;
    })


    this.productService.getQuality().subscribe(data => {
      this.quality = data;
    })

    this.productService.getStyle().subscribe(data => {
      this.style = data;
    })


    this.productService.getSize().subscribe(data => {
      this.size = data;
    })


    this.productService.getSizeGroup().subscribe(data => {
      this.sizegroup = data;
    })


    this.productService.getProduct().subscribe(data => {
      this.product = data;
    })



    this.productService.getBrand().subscribe(data => {
      this.brand = data;
    })




  }



  changeFoc() {
    this.proGroup.nativeElement.focus();
  }

}
