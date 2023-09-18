import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", {
        unique: true,
        length: 50
    })
    title: string;

    @Column({
        default: false
    })
    status: boolean;
}
