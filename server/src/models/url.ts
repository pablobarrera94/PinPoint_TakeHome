import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Url {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    url!: string;
  
    @Column()
    short_code!: string;
  
    @CreateDateColumn()
    createdAt!: Date;

  }