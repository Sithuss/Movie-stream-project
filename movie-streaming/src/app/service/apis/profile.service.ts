import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn : 'any'})

export class ProfileService {

    uploadProfileImage(form:any):Observable<any> {
        return of ({
            name : '',
            email: '',
            premium: '',
            image: ''
        })

    }
    saveProfile(form:any):Observable<any>{
        return of(form)
    }
}