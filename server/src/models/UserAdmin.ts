import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'


@Entity('useradmin')
class UserAdmin {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  password: string;
  
  @CreateDateColumn()
  created_at: Date;

}

export default UserAdmin;