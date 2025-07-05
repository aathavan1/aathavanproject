import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../model/product';
import { ProductService } from '../service/product.service'
import { OperatorService } from '../service/operatorservice.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  setVisibl: boolean = true;
  @ViewChild('proGroup') proGroup!: ElementRef;
  productService: ProductService = inject(ProductService);
  operatorService: OperatorService = inject(OperatorService);

  productGroup: product[] = [];
  quality: product[] = [];
  style: product[] = [];
  size: product[] = [];
  sizegroup: product[] = [];
  product: product[] = [];
  brand: product[] = [];
  hsn: product[] = [];


  productForm = new FormGroup({
    productgroupcode: new FormControl(''),
    qualitycode: new FormControl(''),
    stylecode: new FormControl(''),
    sizegroupcode: new FormControl(''),
    sizecode: new FormControl(''),
    productcode: new FormControl(''),
    productname: new FormControl(''),
    shortname: new FormControl(''),
    brandcode: new FormControl(''),
    orderlevel: new FormControl(''),
    pieceperpack: new FormControl(''),
    mrprate: new FormControl(''),
    sellingrate: new FormControl(''),
    purchaserate: new FormControl(''),
    taxable: new FormControl(''),
    allowdisc: new FormControl(''),
    hsncode: new FormControl('')
  })




  router: ActivatedRoute = inject(ActivatedRoute)
  routerNav: Router = inject(Router)

  ngOnInit(): void {
    let opercode = this.router.snapshot.paramMap.get('id');
    this.operatorService.checkOperator(opercode == null ? '0' : opercode)
      .subscribe(data => {
        if (data.length == 0) {
          window.alert('Invalid login')
          this.routerNav.navigate(['/']);
        }
      })

    this.loadProductGroup();
    setTimeout(() => {
      this.setDefaultValues();
    }, 500);
  }
  setDefaultValues() {

    this.productForm.patchValue({
      productgroupcode: this.productGroup[0].productgroupcode,
      qualitycode: this.quality[0].qualitycode,
      stylecode: this.style[0].stylecode,
      sizegroupcode: this.sizegroup[0].sizegroupcode,
      sizecode: this.size[0].sizecode,
      brandcode: this.brand[0].brandcode,
      taxable: 'Y',
      allowdisc: 'Y',
      hsncode: this.hsn[0].hsncode
    })

  }



  loadProductGroup() {
    this.productService.getProductGroup().subscribe(data => {
      this.productGroup = data;
    })

    this.productService.getQuality().subscribe(data => {
      this.quality = data;

    })
    console.log(this.productForm.value)

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

    this.productService.getHsn().subscribe(data => {
      this.hsn = data;
    })


  }


  changeFoc() {
    console.log(this.productForm.value)
    this.proGroup.nativeElement.focus();
  }

  saveData() {
    if(this.productForm.value.productcode?.length==0){
      throw console.error("ProductCode Should Not Be empty");
      
    }
    

  }


}
