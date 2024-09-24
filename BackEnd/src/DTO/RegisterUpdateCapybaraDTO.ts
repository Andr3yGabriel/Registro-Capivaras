import { IsInt, IsString } from "class-validator";

export class RegisterUpdateCapybaraDTO {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsInt()
    readonly weight: number;

    @IsString()
    readonly healthStatus: string;

    @IsString()
    readonly behavior: string;

    @IsString()
    readonly observations: string;
}