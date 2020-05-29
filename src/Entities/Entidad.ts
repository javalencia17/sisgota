import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('entidades')
export class Entidad {

    @PrimaryGeneratedColumn()
    idEntidad: number;

    @Column()
    nombreEntidad: string;

    @Column({
        type: 'tinyint'
    })
    activo: number;

    @CreateDateColumn()
    create_at: Date
}