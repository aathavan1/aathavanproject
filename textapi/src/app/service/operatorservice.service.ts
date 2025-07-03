import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator} from '../model/operator.service'
import { Observable } from 'rxjs';
import { api } from '../appconstant.component'

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  
  constructor(private httpClient: HttpClient) { }

  getOperator(): Observable<Operator[]> {
    return this.httpClient.get<Operator[]>(api+'/getoper');
  }

}
