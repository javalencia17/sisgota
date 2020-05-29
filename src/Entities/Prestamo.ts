import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Pasivo } from './Pasivo';
import { Solicitante } from './Solicitante';
import { Estado } from './Estado';
import { Interes } from './Interes';


@Entity('prestamos')
export class Prestamo {

    @PrimaryGeneratedColumn()
    idPrestamo: number;

    @Column('decimal')
    valorPrestamo: number;

    @Column('decimal')
    gananciaPrestamo: number;

    @Column('decimal')
    perdidaPrestamo: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(type => Pasivo)
    @JoinColumn()
    pasivos_: number;

    @OneToOne(type => Solicitante)
    @JoinColumn()
    solicitantes_: number;

    @OneToOne(type => Estado)
    @JoinColumn()
    estados_: number;

    @OneToOne(type => Interes)
    @JoinColumn()
    intereses_: number;
}