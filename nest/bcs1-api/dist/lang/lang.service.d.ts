import { LangEntity } from 'src/entities/lang.entity';
import { Repository } from 'typeorm';
export declare class LangService {
    private langRepository;
    constructor(langRepository: Repository<LangEntity>);
    getLang(lang: string): Promise<LangEntity>;
}
