import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Rol } from './Rol';
import { Entidad } from './Entidad';


@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    nombrUsuario: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    correo: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(type => Rol)
    @JoinColumn()
    roles_: number;

    @OneToOne(type => Entidad)
    @JoinColumn()
    entidades_: number;

   


    







}
