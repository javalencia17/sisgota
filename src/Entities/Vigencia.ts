import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, OneToOne } from "typeorm";
import { Entidad } from './Entidad';

@Entity('vigencias')
export class Vigencia {
    
    @PrimaryGeneratedColumn()
    idVigencia: string;

    @Column('decimal')
    valorVigencia: number;

    @Column('datetime')
    inicioVigencia: Date;

    @Column('datetime')
    finVigencia: Date;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(type => Entidad)
    @JoinColumn()
    entidades_idEntidad: number
}