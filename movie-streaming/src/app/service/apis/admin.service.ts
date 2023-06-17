import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environment";

const ADMIN_DOMAIN = `${environment.baseUrl}/admin`

@Injectable({
  providedIn:'any'
})
export class AdminService {

}
