import { NgFor } from '@angular/common';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../model/product';
import { ProductService } from '../service/product.service'
import { OperatorService } from '../service/operatorservice.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { statVariable } from '../appconstant'


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @ViewChild('proGroup') proGroup!: ElementRef;
  productService: ProductService = inject(ProductService);
  operatorService: OperatorService = inject(OperatorService);
  editFlag = signal(true);

  router: ActivatedRoute = inject(ActivatedRoute)
  routerNav: Router = inject(Router)
  loginOperCode!: string;
  productGroup: product[] = [];
  quality: product[] = [];
  style: product[] = [];
  size: product[] = [];
  sizegroup: product[] = [];
  product: product[] = [];
  brand: product[] = [];
  hsn: product[] = [];


  productForm = statVariable.statFormGroup




  ngOnInit(): void {

    let opercode = localStorage.getItem('opercode')
    let textId = this.router.snapshot.paramMap.get('id')

    if (textId != '12341234') {
      this.editFlag.set(false)

      this.operatorService.checkOperator(opercode == null ? '0' : opercode)
        .subscribe(data => {
          if (data.length == 0) {
            window.alert('Invalid login')
            this.routerNav.navigate(['/']);
          }
          else {
            this.loginOperCode = opercode == null ? '0' : opercode;
          }
        })
      this.loadProductGroup();
      setTimeout(() => {
        this.setDefaultValues();
      }, 300);
    }
    else {
      this.loadProductGroup();
    }


  }
  setDefaultValues() {

    if (!this.editFlag()) {
      this.productForm.patchValue({
        productgroupcode: this.productGroup[0].productgroupcode,
        qualitycode: this.quality[0].qualitycode,
        stylecode: this.style[0].stylecode,
        sizegroupcode: this.sizegroup[0].sizegroupcode,
        sizecode: this.size[0].sizecode,
        brandcode: this.brand[0].brandcode,
        taxable: 'Y',
        allowdiscount: 'Y',
        hsncode: this.hsn[0].hsncode,
        barcode: '',
        mrprate: '',
        purrate: '',
        sellingrate: '',
        narration: '',
        pieceperpack: '',
        productname: '',
        shortname: '',
        orderlevel: ''
      })
    }


  }


  setEditedValue(value: product) {
    if (value == null) {
      console.log('No value Found for this Product')
      return;
    }

    this.productForm.patchValue({
      productgroupcode: value.productgroupcode,
      qualitycode: value.qualitycode,
      stylecode: value.stylecode,
      sizegroupcode: value.sizegroupcode,
      sizecode: value.sizecode,
      brandcode: value.brandcode,
      taxable: value.taxable,
      allowdiscount: value.allowdiscount,
      hsncode: value.hsncode,
      barcode: value.brandcode,
      mrprate: value.mrprate,
      purrate: value.purrate,
      sellingrate: value.sellingrate,
      narration: value.narration,
      pieceperpack: value.pieceperpack,
      productname: value.productname,
      productcode:value.productcode,
      shortname: value.shortname,
      orderlevel: value.orderlevel
    })

    console.log(this.productForm.value)
  }



  loadProductGroup() {
    console.log('productloaded')
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

    this.productService.getHsn().subscribe(data => {
      this.hsn = data;
    })


  }


  changeFoc() {
    // console.log(this.productForm.value)
    // this.proGroup.nativeElement.focus();

    console.log(this.productForm.value)

  }

  async saveData() {
    try {
      if (this.productForm.value.barcode?.length == 0) {
        window.alert('BarCode Should not be Empty')
        return;
      }
      else if (this.productForm.value.productname?.length == 0) {
        window.alert('ProductName Should not be Empty')
        return;
      }

      else if (this.productForm.value.mrprate?.length == 0) {
        window.alert('MRP Rate Should not be Empty')
        return;
      }


      else if (this.productForm.value.purrate?.length == 0) {
        window.alert('Pur Rate Should not be Empty')
        return;
      }

      else if (this.productForm.value.sellingrate?.length == 0) {
        window.alert('Selling Rate Should not be Empty')
        return;
      }

      this.productForm.patchValue({
        createdby: localStorage.getItem('opercode')
      })

      const datas = this.productForm.value;
      (await this.productService.saveProduct(datas)).subscribe(
        data => {
          console.log(data)
        }
      )
      window.alert('Saves Sucessfully')
      this.setDefaultValues();
      // this.editedState=false;

    } catch (err) {
      window.alert(err)
    }

  }

  public productEdit(value: product) {
    this.editFlag.set(true)

    setTimeout(() => {
      this.setEditedValue(value)
    }, 1000)

    // this.setEditedValue()
  }

}
