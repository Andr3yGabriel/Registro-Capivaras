import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", width: 80})
    name: string;

    @Column({type: "varchar", width: 80})
    email: string;

    @Column({type: "varchar"})
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if(this.password) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
    };

    async checkPassword(unEncryptedPassword: string): Promise<boolean> {
        return await bcrypt.compare(unEncryptedPassword, this.password);
    }
}