import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  year: string;
}
