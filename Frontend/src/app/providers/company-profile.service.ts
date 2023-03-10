import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError, switchMap, of } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class CompanyProfileService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  set allCompany(token: string) {
    localStorage.setItem("allCompany", token);
  }

  get allCompany(): string {
    return localStorage.getItem("allCompany") ?? "";
  }

  getAllCompany = (): Observable<any> => {
    const endpoint = this.baseUrl + "api/company/get_company_list";
    return this.http.get(endpoint).pipe(
      switchMap((response: any) => {
        this.allCompany = JSON.stringify(response?.data || []);

        return of(response);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getSingleCompany = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/company/get_company_profile";
    let params = new HttpParams().set("company_id", data?.company_id);

    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  addCompany = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/company/add_company";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  addSectionB = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/management_and_process";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  addStagingSectionB = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/staging_management_and_process";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  sendEmployeeInvite = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("recipient_emailid", data?.recipient_emailid)
      .set("invite_link", data?.invite_link);
    const endpoint = this.baseUrl + "api/company/add_employee_link";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getAllEmployee = (data): Observable<any> => {
    let params = new HttpParams().set("company_id", data?.company_id);
    const endpoint = this.baseUrl + "api/company/get_employee_list";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getUserAccess = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("employee_id", data?.employee_id)
      .set("location_id", data?.location_id)
      .set("limit", 2)
      .set("offset", 0)
      .set("sort_by", -1);

    const endpoint = this.baseUrl + "api/company/get_access_module_list";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getAllModuleList = (data): Observable<any> => {
    let params = new HttpParams().set("company_id", data?.company_id);

    const endpoint = this.baseUrl + "api/company/get_module_list";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  addEditAccess = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/company/add_access_module";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  //location
  getAllLocation = (data): Observable<any> => {
    let params = new HttpParams().set("company_id", data?.company_id);

    const endpoint = this.baseUrl + "api/company/get_location_specific_and_all";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  addLocation = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/company/add_location";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
}
