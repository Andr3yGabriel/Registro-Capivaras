import { IsEmail, IsString } from "class-validator";

export class UpdateUserDTO {
    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;
}