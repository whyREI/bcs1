import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILang } from '../interfaces/lang';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LangService {
  private endpoint: string = 'http://localhost:3000/api/';
  private langSubject = new BehaviorSubject<ILang | null>(null);

  lang$: Observable<ILang | null> = this.langSubject.asObservable();

  getLang(): Observable<ILang> {
    return this.http.get<ILang>(
      this.endpoint + 'lang/' + this.cookies.get('Lang')
    );
  }

  updateLang() {
    this.getLang().subscribe(
      (langData) => {
        this.langSubject.next(langData);
      },
      (error) => {
        console.error('Ошибка при получении языковых данных:', error);
      }
    );
  }

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.updateLang();
  }
}
