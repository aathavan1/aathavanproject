import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator } from '../model/operator'
import { Observable } from 'rxjs';
import { api } from '../appconstant'

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private httpClient: HttpClient) { }

  getOperator(): Observable<Operator[]> {
    return this.httpClient.get<Operator[]>(api + '/getoper');
  }

  checkOperator(operCode: string): Observable<string> {
    return this.httpClient.get(api + '/checkuser/' + operCode, { responseType: 'text' })
  }

  async checkLogin(operCode: string, password: string): Promise<Observable<boolean>> {
    return await this.httpClient.get<boolean>(api + "/checkuser?opercode=" + operCode + "&password=" + password)
  }

}
