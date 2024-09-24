import { AuthResponseDTO } from "../DTO/AuthResponseDTO";
import { RegisterUserDTO } from "../DTO/RegisterUserDTO";
import { User } from "../models/User";

export interface IAuthService {
    register(RegisterUserDTO: RegisterUserDTO): Promise<AuthResponseDTO>;
    login(email: string, password: string): Promise<AuthResponseDTO>;
    logout(userId: number): Promise<void>;
    validateUser(email: string, password: string): Promise<User | null>
}