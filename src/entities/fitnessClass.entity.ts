import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class fitnessClass {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    classdate:Date;

    @Column()
    attendees:number;

    @ManyToMany((type)=>User,(user) => user.fitnessclasses)
    users:User[];

}