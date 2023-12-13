import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('lang')
export class LangEntity {
  @PrimaryColumn() lang: string;
  @Column() positionName: string;
  @Column() name: string;
  @Column() status: string;
  @Column() description: string;
  @Column() softSkills: string;
  @Column() hardSkills: string;
  @Column() github: string;
  @Column() gmail: string;
  @Column() telegram: string;
}
