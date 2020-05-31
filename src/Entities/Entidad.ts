import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('entidades')
export class Entidad extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    idEntidad: number;

    @Field(type => String)
    @Column()
    nombreEntidad: string;

    @Field(type => Boolean)
    @Column({default: true})
    activo: boolean;

    @Field()
    @Column({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    create_at: Date
}