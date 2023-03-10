import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class PrinciplesService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  addPrinciple1 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_one";
    if (staging) url = "api/form/staging_principal_one";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple2 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_two";
    if (staging) url = "api/form/staging_principal_two";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple3 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_three";
    if (staging) url = "api/form/staging_principal_three";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple4 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_four";
    if (staging) url = "api/form/staging_principal_four";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple5 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_five";
    if (staging) url = "api/form/staging_principal_five";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple6 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_six";
    if (staging) url = "api/form/staging_principal_six";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple7 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_seven";
    if (staging) url = "api/form/staging_principal_seven";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple8 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_eight";
    if (staging) url = "api/form/staging_principal_eight";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addPrinciple9 = (data, staging?): Observable<any> => {
    let url = "api/form/principal_nine";
    if (staging) url = "api/form/staging_principal_nine";
    const endpoint = this.baseUrl + url;
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  getPrinciple = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("form_type", data?.form_type);

    const endpoint = this.baseUrl + "api/form";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getPrincipleMonthYear = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("form_type", data?.form_type)
      .set("year", data?.year);

    const endpoint = this.baseUrl + "api/form/get_form_month_and_year_wise";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  getReportPrinciple = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("form_type", data?.form_type)
      .set("month", data?.month)
      .set("year", data?.year);

    const endpoint = this.baseUrl + "api/form/get_form_month_and_year_wise";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  addMonthlyPrinciple1 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_one";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple2 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_two";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple3 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_three";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple4 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_four";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple5 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_five";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple6 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_six";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple7 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_seven";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple8 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_eight";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
  addMonthlyPrinciple9 = (data): Observable<any> => {
    const endpoint = this.baseUrl + "api/form/monthly_survey_principal_nine";
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getMonthlySurveyData = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("form", data?.form)
      .set("from_date", data?.from_date)
      .set("to_date", data?.to_date)
      .set("limit", data?.limit)
      .set("offset", data?.offset)
      .set("location_id", data?.location_id);

    const endpoint =
      this.baseUrl +
      "api/form/get_monthly_survey_form_data_specific_date_range";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  //Dashboard
  getGraphData1 = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      //.set("location_id", data?.location_id)
      .set("from_date", data?.from_date)
      .set("to_date", data?.to_date);

    const endpoint =
      this.baseUrl + "api/form/get_monthly_survey_aggregate_data";
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getGraphData2 = (data): Observable<any> => {
    let params = new HttpParams()
      .set("company_id", data?.company_id)
      .set("location_id", data?.location_id)
      .set("from_date", data?.from_date)
      .set("to_date", data?.to_date);

    const endpoint = this.baseUrl + "api/form/" + data?.url;
    return this.http.get(endpoint, { params: params }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };
}
