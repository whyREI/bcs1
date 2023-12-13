import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LangEntity } from 'src/entities/lang.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LangService {
  constructor(
    @InjectRepository(LangEntity)
    private langRepository: Repository<LangEntity>,
  ) {}

  async getLang(lang: string) {
    if (lang == 'en') {
      return await this.langRepository.findOne({ where: { lang: 'en' } });
    }
    return await this.langRepository.findOne({ where: { lang: 'ru' } });
  }
}
