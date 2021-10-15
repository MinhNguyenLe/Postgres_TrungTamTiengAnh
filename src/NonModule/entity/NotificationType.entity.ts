import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notification_type')
export class NotificationTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}