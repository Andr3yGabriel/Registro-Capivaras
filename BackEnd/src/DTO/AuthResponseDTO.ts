import { IsJWT } from "class-validator";


export class AuthResponseDTO {
    @IsJWT()
    readonly token: string;
}