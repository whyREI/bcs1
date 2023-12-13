import { Controller, Get } from '@nestjs/common';
import { LangService } from './lang.service';

@Controller('lang')
export class LangController {
  constructor(private langService: LangService) {}

  @Get('en')
  getEnLang() {
    return this.langService.getLang('en');
  }

  @Get('ru')
  getRuLang() {
    return this.langService.getLang('ru');
  }
}
