import * as mongoose from 'mongoose';

export const LaboratorioSchema = new mongoose.Schema(
  {
    LaboratorioID: { type: String, required: true },
    ResultadoID: { type: String, required: true },
    MedicoID: { type: String, required: true },
    Nombre_Laboratorio: { type: String, required: true },
    Direccion_Laboratorio: { type: String, required: true },
    Telefono_Laboratorio: { type: String, required: true },
  },
  { timestamps: true },
);

LaboratorioSchema.index({ Nombre_Laboratorio: 1 }, { unique: true });
LaboratorioSchema.index({ LaboratorioID: 1 }, { unique: true });
