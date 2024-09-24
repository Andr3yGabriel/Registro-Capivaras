import { UpdateUserDTO } from "../DTO/UpdateUserDTO";
import { UpdateUserPasswordDTO } from "../DTO/updateUserPasswordDTO";
import { User } from "../models/User";

export interface IUserService {
    findUserByEmail(email: string): Promise<User | null>
    updateUser(updateUserDTO: UpdateUserDTO): Promise<void>
    updatePassword(updateUserPasswordDTO: UpdateUserPasswordDTO): Promise<void>
    deleteUser(): Promise<void>
}