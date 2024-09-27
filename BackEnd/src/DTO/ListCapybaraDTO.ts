import { IsInt, IsString } from "class-validator";

export class ListCapybarasDTO {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly habitat: string;
}