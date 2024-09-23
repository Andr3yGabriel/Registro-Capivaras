import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { InfoCapybara } from "./InfoCapybara";

@Entity()
export class PhotoCapybara {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    url: string

    @ManyToOne(() => InfoCapybara, (capybara) => capybara.photos)
    capybara: InfoCapybara;
}