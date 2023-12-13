import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './components/footer/footer.component';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(FooterComponent) footerComponent!: FooterComponent;

  // Lang
  langName: string = this.cookies.get('Lang');

  @Input()
  langToggleMode() {
    this.langName = this.langName == 'en' ? 'ru' : 'en';
    this.footerComponent.langName = this.langName;
    this.cookies.set('Lang', this.langName);

    this.langService.updateLang();
  }

  // Theme
  themeCookie = this.cookies.get('Theme');

  darkThemeIconName = 'dark_mode';
  lightThemeIconName = 'brightness_5';

  themeIconName!: string;

  @Input()
  themeToggleMode() {
    let bodyClasses: DOMTokenList = document.body.classList;
    let theme = bodyClasses.toggle('dark');
    this.themeIconName = theme
      ? this.darkThemeIconName
      : this.lightThemeIconName;

    if (!theme) {
      this.themeIconName = this.lightThemeIconName;
      this.cookies.set('Theme', 'light');
    } else {
      this.themeIconName = this.darkThemeIconName;
      this.cookies.set('Theme', 'dark');
    }
  }

  constructor(
    private cookies: CookieService,
    private langService: LangService
  ) {}

  ngOnInit(): void {
    // Theme
    if (this.themeCookie == 'dark') {
      document.body.classList.add('dark');
      this.themeIconName = this.darkThemeIconName;
    } else {
      this.themeIconName = this.lightThemeIconName;
    }
    // Lang
    this.langName = this.langName ? this.langName : 'ru';
    this.cookies.set('Lang', this.langName);
  }
}
