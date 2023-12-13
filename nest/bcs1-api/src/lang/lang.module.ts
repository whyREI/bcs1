import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LangEntity } from 'src/entities/lang.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LangEntity])],
  providers: [LangService],
  controllers: [LangController],
})
export class LangModule {}
