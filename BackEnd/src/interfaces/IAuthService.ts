import { AuthResponseDTO } from "../DTO/AuthResponseDTO";
import { RegisterUserDTO } from "../DTO/RegisterUserDTO";
import { User } from "../models/User";

export interface IAuthService {
    register(RegisterUserDTO: RegisterUserDTO): Promise<AuthResponseDTO>;
    login(email: string, password: string): Promise<AuthResponseDTO>;
}