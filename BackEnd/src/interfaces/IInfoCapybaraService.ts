import { RegisterUpdateCapybaraDTO } from "../DTO/RegisterUpdateCapybaraDTO";
import { InfoCapybara } from "../models/InfoCapybara";

export interface IInfoCapybaraService {
    registerCapybara(RegisterUpdateCapybaraDTO: RegisterUpdateCapybaraDTO): Promise<InfoCapybara>
}