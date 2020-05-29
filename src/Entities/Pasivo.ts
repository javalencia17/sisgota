import { Usuario } from './Usuario';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('pasivos')
export class Pasivo {

    @PrimaryGeneratedColumn()
    idPasivo: string;

    @Column('decimal')
    valorPasivo: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(type => Usuario)
    @JoinColumn()
    usuarios_: number;

}