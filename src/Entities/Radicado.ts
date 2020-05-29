import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn  } from "typeorm";
import { Prestamo } from './Prestamo';


@Entity('radicados')
export class Radicado {

    @PrimaryGeneratedColumn()
    idRadicado: number;

    @Column('year')
    vigenciaRadicado: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(type => Prestamo)
    @JoinColumn()
    prestamos_: number;


}