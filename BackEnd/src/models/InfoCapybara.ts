import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PhotoCapybara } from "./PhotoCapybara";

@Entity()
export class InfoCapybara {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", width: 80})
    name: string;

    @Column("int")
    age: number

    @Column("int")
    weight: number

    @Column({type: "varchar", width: 40})
    healthStatus: string

    @Column("varchar")
    behavior: string

    @Column("varchar")
    observations: string

    @OneToMany(() => PhotoCapybara, (photo) => photo.capybara)
    photos: PhotoCapybara[]
}