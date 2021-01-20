import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryColumn()
    id: string;

    @Column()
    nickname: string;

    @Column()
    userChess: string;

    @Column()
    rating: number;
}
