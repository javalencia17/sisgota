import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity('roles')
export class Rol {

    @PrimaryGeneratedColumn()
    idRol: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    nombreRol: string

    @CreateDateColumn()
    created_at: Date;

}