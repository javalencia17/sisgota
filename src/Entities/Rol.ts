import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity('roles')
export class Rol extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    idRol: number;

    @Field(type => String)
    @Column({
        type: 'varchar',
        length: 100,
    })
    nombreRol: string

    @Field(type => String)
    @Column({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    created_at: Date;

  


}