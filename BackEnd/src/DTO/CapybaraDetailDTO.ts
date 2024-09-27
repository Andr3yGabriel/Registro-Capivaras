import { IsInt, IsString, MaxLength } from "class-validator";

export class CapybaraDetailDTO {
    @IsString()
    readonly name:string;

    @IsInt()
    readonly age: number;

    @IsInt()
    readonly weight: number;

    @IsString()
    readonly habitat: string;

    @IsString()
    readonly healthStatus: string;

    @IsString()
    readonly behavior: string;

    @IsString()
    readonly observation: string;
}