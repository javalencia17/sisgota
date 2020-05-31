import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Rol } from './Rol';
import { Entidad } from './Entidad';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('usuarios')
export class Usuario extends BaseEntity {

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Field(type => String)
    @Column({
        type: 'varchar',
        length: 100,
    })
    nombreUsuario: string;

    @Field(type => String)
    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    correo: string;

    @Field(type => String)
    @Column({
        type: 'varchar',
        length: 100,
    })
    password: string;

    @Field()
    @Column({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    created_at: Date;


    @Field()
    @ManyToOne(type => Rol, rol => rol.idRol, { nullable: false, eager: true })
    @JoinColumn({ name: 'roles_idRol' })
    rol: Rol;

    @Field()
    @ManyToOne(type => Entidad, entidad => entidad.idEntidad, { nullable: false, eager: true })
    @JoinColumn({ name: 'entidades_idEntidad' })
    entidad: Entidad; 
}
