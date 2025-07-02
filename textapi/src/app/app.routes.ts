import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'product',component:ProductComponent}
];
