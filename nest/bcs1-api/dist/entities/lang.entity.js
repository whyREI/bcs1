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
exports.LangEntity = void 0;
const typeorm_1 = require("typeorm");
let LangEntity = class LangEntity {
};
exports.LangEntity = LangEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], LangEntity.prototype, "lang", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "positionName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "softSkills", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "hardSkills", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "github", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "gmail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LangEntity.prototype, "telegram", void 0);
exports.LangEntity = LangEntity = __decorate([
    (0, typeorm_1.Entity)('lang')
], LangEntity);
//# sourceMappingURL=lang.entity.js.map