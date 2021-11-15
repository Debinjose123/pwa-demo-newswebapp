import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }
  techHeading():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }
}
