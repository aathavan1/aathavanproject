import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { AsyncPipe } from '@angular/common'
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { OperatorService } from '../service/operatorservice.service';
import { Operator } from '../model/operator'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatButtonModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  operatorService: OperatorService = inject(OperatorService)


  // appComp = new AppComponent;

  myControl = new FormControl('');
  myPass = new FormControl('');
  arrUserName: string[] = [];
  lstOperator: Operator[] = [];
  filteredOptions!: Observable<string[]>;

  router: Router = inject(Router);

  constructor() {
    this.loadUsers()
  }


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.arrUserName.filter(username => username.toLowerCase().includes(filterValue));
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  loadUsers() {
    this.operatorService.getOperator().subscribe(data => {
      this.lstOperator = data;
      for (let i = 0; i < this.lstOperator.length; i++) {
        this.arrUserName.push(this.lstOperator[i].opername)
      }
    })
  }




  verifyUser() {
    try {

      this.checkValidUser();


    }
    catch (error) {
      alert(error)
    }
  }


  async checkValidUser() {
    let operCode = 0;
    let login = false;


    if(this.myControl.value==''){
      window.alert('Enter OperName')
      return;
    }

    if(this.myPass.value==''){
      window.alert('Enter Password')
      return;
    }

    if (this.arrUserName.filter(user => user == this.myControl.value).length == 0) {
      throw new Error('Invalid Operator')
    }

    for (let i = 0; i < this.arrUserName.length; i++) {
      if (this.lstOperator[i].opername == this.myControl.value) {
        operCode = this.lstOperator[i].opercode;
        break;
      }
    }
    (await this.operatorService.checkLogin(operCode.toString(), this.myPass.value!)).subscribe(
      data => {
        login = data;
      }
    )

    setTimeout(() => {
      if (!login) {
        window.alert('Wrong password')
        this.myPass.setValue('')
        return
      }
      localStorage.setItem('opercode', operCode.toString());
      this.router.navigate(['/panelmain'])
    }, 100);

  }


}
