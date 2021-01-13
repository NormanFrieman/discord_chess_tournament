import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Channel{
    @PrimaryGeneratedColumn()
    name: string;

    @Column()
    id: string;

    @Column()
    parent: string;
}
