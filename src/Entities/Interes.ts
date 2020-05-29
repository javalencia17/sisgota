import { Usuario } from './Usuario';
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('intereses')
export class Interes {

    @PrimaryGeneratedColumn()
    idInteres: number;

    @Column('decimal')
    valorInteres: number;

    @CreateDateColumn()
    created_at: Date

    @OneToOne(type => Usuario)
    @JoinColumn()
    usarios_: number;

}