"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangController = void 0;
const common_1 = require("@nestjs/common");
const lang_service_1 = require("./lang.service");
let LangController = class LangController {
    constructor(langService) {
        this.langService = langService;
    }
    getEnLang() {
        return this.langService.getLang('en');
    }
    getRuLang() {
        return this.langService.getLang('ru');
    }
};
exports.LangController = LangController;
__decorate([
    (0, common_1.Get)('en'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LangController.prototype, "getEnLang", null);
__decorate([
    (0, common_1.Get)('ru'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LangController.prototype, "getRuLang", null);
exports.LangController = LangController = __decorate([
    (0, common_1.Controller)('lang'),
    __metadata("design:paramtypes", [lang_service_1.LangService])
], LangController);
//# sourceMappingURL=lang.controller.js.map