/**
 * Created by ncreato on 09/06/2020.
 */

import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

    constructor(public http: Http) { }

    public getProducts(dataURL:string){
        return this.http.get(dataURL).pipe(
            map((res:Response) => res.json()),
            catchError((error:any) => Observable.throw(error || 'Server error')))
    }
}