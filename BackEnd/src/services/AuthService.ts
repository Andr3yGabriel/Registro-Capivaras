import { AppDataSource } from "../data/DataSource";
import { AuthResponseDTO } from "../DTO/AuthResponseDTO";
import { RegisterUserDTO } from "../DTO/RegisterUserDTO";
import { IAuthService } from "../interfaces/IAuthService";
import { User } from "../models/User";
import jwt from 'jsonwebtoken';

export class AuthService implements IAuthService {
    private userRepository = AppDataSource.getRepository(User);

    async register(RegisterUserDTO: RegisterUserDTO): Promise<AuthResponseDTO> {
        const { email, password, name } = RegisterUserDTO;

        const existingUser = await this.userRepository.findOneBy({ email });
        if (existingUser) {
            throw new Error('Usuário já está cadastrado na base de dados!');
        }

        const newUser = this.userRepository.create({
            email,
            password,
            name,
        });

        await this.userRepository.save(newUser);

        const token = this.generateToken(newUser);

        return {
            token
        }
    }

    async login(email: string, password: string): Promise<AuthResponseDTO> {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            throw new Error('Credenciais Inválidas!');
        }

        const isPasswordValid = await user.checkPassword(password);
        if (!isPasswordValid) {
            throw new Error('Credenciais Inválidas!');
        }

        const token = this.generateToken(user);

        return {
            token
        };
    }

    private generateToken(user: User): string {
        const payload = { userId: user.id, email: user.email };
        const secret = process.env.JWT_SECRET || 'defaultsecret';
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        return token
    }
}