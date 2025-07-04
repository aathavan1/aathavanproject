import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PanelmainComponent } from './panelmain/panelmain.component';


export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'product/:id',component:ProductComponent},
    {path:'panelmain',component:PanelmainComponent  },
    {path:'**',component:LoginComponent}
];
