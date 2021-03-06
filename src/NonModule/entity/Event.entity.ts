import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
