import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid';

import { Expose } from 'class-transformer';

@Entity('cars')
class Car {
  @PrimaryColumn()
  id: string;
  
  @Column()
  brand: string;
  
  @Column()
  model: string;
  
  @Column()
  name: string;
  
  @Column()
  price: number;
  
  @Column()
  year: number;
  
  @Column()
  mileage: string;
  
  @Column()
  traction: string;
  
  @Column()
  fuel: string;
  
  @Column()
  streaming: string;
  
  @Column()
  port: string;

  @Column()
  imageCar?:  string;
  
  @Column()
  direction: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'imageCar_Url'})
  getImageCarUrl(): string {
    return `${process.env.APP_API_URL}/files/${this.imageCar}`
  }

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export default Car;