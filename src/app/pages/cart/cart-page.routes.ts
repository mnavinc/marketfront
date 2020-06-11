/**
 * Created by ncreato on 09/06/2020.
 */
import {CartPageComponent} from "./cart-page.component";
import { SuccessComponent } from './success/success.component';

export const cartPageRoutes=[
    {
        path:'',
        component:CartPageComponent,
    },
    {
        path:'success',
        component: SuccessComponent
    }   
];