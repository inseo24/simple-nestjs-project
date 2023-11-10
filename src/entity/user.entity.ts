import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, default: '' })
  name: string;

  @Column({ type: 'varchar', length: 200, default: '' })
  email: string;
}
