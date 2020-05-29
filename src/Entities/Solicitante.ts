import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('solicitantes')
export class Solicitante {

    @PrimaryGeneratedColumn()
    idSolicitante: number;

    @Column()
    nombreSolicitante: string;

    @Column()
    telefonoSolicitante: string;

    @Column()
    direccionSolicitante: string;

    @Column()
    documentoSolicitante: string;

    @Column('text')
    observacionSolicitante: string;

    @CreateDateColumn()
    created_at: Date;
}