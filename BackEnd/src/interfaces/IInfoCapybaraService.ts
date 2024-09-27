import { CapybaraDetailDTO } from "../DTO/CapybaraDetailDTO";
import { ListCapybarasDTO } from "../DTO/ListCapybaraDTO";
import { RegisterUpdateCapybaraDTO } from "../DTO/RegisterUpdateCapybaraDTO";
import { InfoCapybara } from "../models/InfoCapybara";
import { PhotoCapybara } from "../models/PhotoCapybara";

export interface IInfoCapybaraService {
    registerCapybara(RegisterUpdateCapybaraDTO: RegisterUpdateCapybaraDTO): Promise<InfoCapybara>
    updateCapybara(RegisterUpdateCapybaraDTO: RegisterUpdateCapybaraDTO): Promise<InfoCapybara>
    deleteCapybara(): Promise<void>
    getCapybaraPhotos(capybaraId: number): Promise<PhotoCapybara[]>
    listCapybaras(userId: number): Promise<ListCapybarasDTO[]>
    getCapybaraInfo(id: number): Promise<CapybaraDetailDTO>
}