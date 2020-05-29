import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Prestamo } from './Prestamo';


@Entity('visitas')
export class Visita {

    @PrimaryGeneratedColumn()
    idVisiata: number;

    @Column('decimal')
    dinero: number;

    @Column('decimal')
    valorVisita: number;

    @Column('decimal')
    numeroCuota: number;

    @Column('decimal')
    abonoCapital: number;

    @Column('decimal')
    abonoInteres: number;

    @Column('decimal')
    totaPrestamo: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(type => Prestamo)
    @JoinColumn()
    prestamos_: number;


}