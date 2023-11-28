import { LaboratorioDTO } from './dto/laboratorio.dto'; // Importa el DTO de laboratorio
import { HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LABORATORIO } from 'src/common/models/models'; // Importa la constante para el nombre del laboratorio
import { ILaboratorio } from 'src/common/interfaces/laboratorio.interface'; // Importa la interfaz de laboratorio


@Injectable()
export class LaboratorioService {
  constructor(@InjectModel(LABORATORIO.name) private readonly model: Model<ILaboratorio>) {}

  async create(laboratorioDTO: LaboratorioDTO): Promise<ILaboratorio> {
    const newLaboratorio = new this.model(laboratorioDTO);
    return await newLaboratorio.save();
  }

  async findAll(): Promise<ILaboratorio[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ILaboratorio> {
    return await this.model.findById(id);
  }

  async update(id: string, laboratorioDTO: LaboratorioDTO): Promise<ILaboratorio> {
    return await this.model.findByIdAndUpdate(id, laboratorioDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
