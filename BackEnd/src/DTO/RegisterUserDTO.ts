import { IsEmail, IsString, Min, MinLength } from "class-validator";

export class RegisterUserDTO {
    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(6)
    readonly password: string
}