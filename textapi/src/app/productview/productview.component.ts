
import { ChangeDetectionStrategy, Component, ElementRef, inject, model, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service'
import { OperatorService } from '../service/operatorservice.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { product } from '../model/product'
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component'
import { NgxPrintModule } from 'ngx-print';

import { NgFor } from '@angular/common';

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
  dialouge: MatDialog = inject(MatDialog)

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
        if (data.length != 0)
          this.lstProduct = data
        else {
          window.alert('No Data To View')
          this.routerNav.navigate(['/product/' + localStorage.getItem('opercode')])
        }
      }
    )
  }
  changeFoc() {
    this.proGroup.nativeElement.focus();
  }

  async deleteValue(proCode: string) {
    console.log(proCode);
    (await this.productService.deleteProduct(proCode)).subscribe(
      data => {
        window.alert('Deleted Sucessfully...')
        console.log(data)
        this.loadProduct();
      }
    )
  }

  async editValue(productValu: product) {
    // this.routerNav.navigate(['product/' + localStorage.getItem('opercode')])
    this.routerNav.navigate(['product/12341234'])


    this.productEntry.productEdit(productValu)


    // (await this.productService.updateProduct(productValu)).subscribe(
    //   data => {

    //     window.alert('Updated Sucessfully...')
    //     console.log(data)

    //   }
    // )

  }

  openMatDialouge(productCode: String) {

    const dialogRef = this.dialouge.open(DialogAnimationsExampleDialog, {
      width: '350px',
      height: '150px',
      data: { yesOrNo: 'false' }
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined)
        console.log(data)
    })

  }

}

@Component({
  selector: 'edit-delete-dialog',
  templateUrl: 'edit-delete-dialog.html',
  standalone: true,
  styles: [`
    button{
      margin-left: 70px;
    }
    `],
  imports: [MatButton],
})
export class DialogAnimationsExampleDialog {

  dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  data = inject<DialougData>(MAT_DIALOG_DATA)
  dataInjection = model(this.data.yesOrNo)

  setTrue() {
    this.data.yesOrNo = true;
    this.dataInjection()
    this.dialogRef.close()
  }
  setFalse() {
    this.data.yesOrNo = false;
    this.dataInjection()
    this.dialogRef.close()
  }


}


export interface DialougData {
  yesOrNo: boolean
}

