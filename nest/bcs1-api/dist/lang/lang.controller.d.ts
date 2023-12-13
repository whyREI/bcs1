import { LangService } from './lang.service';
export declare class LangController {
    private langService;
    constructor(langService: LangService);
    getEnLang(): Promise<import("../entities/lang.entity").LangEntity>;
    getRuLang(): Promise<import("../entities/lang.entity").LangEntity>;
}
