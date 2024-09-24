import { IsString, MinLength } from "class-validator";

export class UpdateUserPasswordDTO {
    @IsString()
    @MinLength(6)
    readonly newPassword: string;

    @IsString()
    @MinLength(6)
    readonly oldPassword: string;
}