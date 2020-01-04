import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient,  HttpHeaders,  HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class RestService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  getCall(url: string): Observable<any> {
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  postCall(url, data): Observable<any> {
    return this.http
      .post(url, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /*

  post(url, data) {
    const headers = new Headers({ "Content-Type": "application/json" });
    //const options = new RequestOptions({ headers: headers });
    //const options= new Req
    return (
      this.http
        //.post(url, data, { headers: headers })
        .post(url, data)
        .map(this.extractData)
        .catch(this.handleErrorObservable1)
    );
  }

  get(url: string) {
    //this.http.get(url).map(this.extractData).catch(this.handleErrorObservable);
    //this.http.get(url).pipe(map(data => { })).subscribe(result => { console.log(result); })
    //this.http.get(url).pipe(map(this.extractData)).subscribe(result => { console.log(result); })

    this.http
      .get(url)
      .map(this.extractData1)
      .pipe(catchError(this.handleErrorObservable1));
  }


  extractData1(res: Response) {
    const resp = res;
    const st = resp.status;

    if (String(st) === "200") {
      try {
        return res.json();
      } catch (error) {
        return true;
      }
    } else if (res.status < 200 || res.status >= 300) {
      throw new Error("Bad response status: " + res.status);
    } else {
      return res.json();
    }
  }

  handleErrorObservable1(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      if (error.status === 500) {
        errMsg =
          "We experiencing some problems. Please try again after some time";
      } else {
        errMsg = "Server Error";
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }*/
}
