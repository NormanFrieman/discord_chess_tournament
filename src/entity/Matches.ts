import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Matches{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    whiteUser: string;

    @Column()
    blackUser: string;

    @Column()
    result: string;
}
