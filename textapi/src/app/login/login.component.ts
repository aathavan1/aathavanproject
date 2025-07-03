import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { AsyncPipe } from '@angular/common'
import { Observable } from 'rxjs';
import { startWith, map, zipAll } from 'rxjs/operators';
import { OperatorService } from '../service/operatorservice.service';
import { Operator } from '../model/operator.service'
import { setLogin } from '../appconstant.component'
import { AppComponent } from '../app.component'


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

  myControl = new FormControl('');
  myPass = new FormControl('');
  username: string[] = [];
  operator: Operator[] = [];
  filteredOptions!: Observable<string[]>;



  constructor() { this.loadUsers() }


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.username.filter(username => username.toLowerCase().includes(filterValue));
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  loadUsers() {
    this.operatorService.getOperator().subscribe(data => {
      this.operator = data;
      for (let i = 0; i < this.operator.length; i++) {
        this.username.push(this.operator[i].opername)
      }
    })
  }


  loginStat = new setLogin;
  // appComp = new AppComponent;


  verifyUser() {
    try {

      this.checkValidUser();
      window.alert('Sucess')

      this.loginStat.setLogin(true)
      // this.appComp.setVisibl(this.loginStat.getLogin())
      console.log(this.loginStat.getLogin())

    }
    catch (error) {
      alert(error)
    }
  }


  checkValidUser() {
    let check: boolean = false;
    for (let i = 0; i < this.username.length; i++) {
      if (this.username[i] == this.myControl.value) {
        check = true;
        if (this.myPass.value != this.operator[i].password) {
          this.myPass.setValue('')
          throw new Error('Invalid Password')
        }
      }
    }

    if (!check) {
      this.myControl.setValue('');
      throw new Error('Invalid Operator')
    }


  }





}
