import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserRank {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    rank: number;

}
