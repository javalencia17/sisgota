import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


@Entity('estados')
export class Estado {

    @PrimaryGeneratedColumn()
    idEstado: number;

    @Column()
    nombreEstado: number;

    @CreateDateColumn()
    created_at: Date;

}