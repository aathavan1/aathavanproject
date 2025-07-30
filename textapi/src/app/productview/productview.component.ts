
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service'
import { OperatorService } from '../service/operatorservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { product } from '../model/product'
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from '../product/product.component'
import { NgxPrintModule } from 'ngx-print';
import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'
import { NgFor } from '@angular/common';
import { statVariable } from '../appconstant'

@Component({
  selector: 'app-productview',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, MatButtonModule, FormsModule, NgxPrintModule],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css'
})
export class ProductviewComponent implements OnInit {

  setVisibl: boolean = true;
  @ViewChild('proGroup') proGroup!: ElementRef;
  productService: ProductService = inject(ProductService);
  operatorService: OperatorService = inject(OperatorService);
  productEntry: ProductComponent = new ProductComponent
  routerNav: Router = inject(Router)
  lstProduct!: product[];
  dialouge = new statVariable();



  ngOnInit(): void {
    let opercod = localStorage.getItem('opercode')
    this.operatorService.checkOperator(opercod == null ? '0' : opercod)
      .subscribe(data => {
        if (data.length == 0) {
          this.dialouge.openMatDialouge('Invalid login')
          this.routerNav.navigate(['/']);
        }
      })

    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProductView().subscribe(
      data => {
        if (data.length != 0)
          this.lstProduct = data
        else {
          this.dialouge.openMatDialouge('No Data To View')
          this.routerNav.navigate(['/product/' + localStorage.getItem('opercode')])
        }
      }
    )
  }
  changeFoc() {
    this.proGroup.nativeElement.focus();
  }

  async deleteValue(proCode: string) {
    (await this.productService.deleteProduct(proCode)).subscribe(
      data => {

        console.log(data)
        this.dialouge.openMatDialouge('Deleted Sucessfully...');
        this.loadProduct();
      }
    )
  }

  async editValue(productValu: product) {
    this.routerNav.navigate(['product/12341234'])
    this.productEntry.productEdit(productValu)
  }

  printPdf() {
    const pdf = new jsPDF()
    const columns = [
      { header: 'ProductName', dataKey: 'productname' },
      { header: 'ProductCode', dataKey: 'productcode' },
      { header: 'ShortName', dataKey: 'shortname' },
      { header: 'MRP', dataKey: 'mrprate' },
      { header: 'SellRate', dataKey: 'sellingrate' },
      { header: 'PurchaseRate', dataKey: 'purrate' }
    ];


    autoTable(pdf, {
      head: [columns.map(col => col.header)],
      body: this.lstProduct.map(item => [item.productname,
      item.productcode,
      item.shortname,
      item.mrprate,
      item.sellingrate,
      item.purrate]),
      columns: columns
    })
    this.dialouge.openMatDialouge('printed sucessfully')
    pdf.save('data.pdf');
  }



}




