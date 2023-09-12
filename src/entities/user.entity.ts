import { BeforeInsert, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { fitnessClass } from "./fitnessClass.entity";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true, nullable: false })
    username:string;

    @Column({unique: true, nullable: false })
    email:string;

    @Column({unique: true, nullable: false })
    password:string;

    @OneToMany((type)=>fitnessClass , (fitnessClass)=>fitnessClass.user)
    fitnessclasses: fitnessClass[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}