import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('tokens')
export class Token {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column()
    type: string;

    @Column({type: 'tinyint'})
    is_revoqued: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(type => Usuario)
    @JoinColumn()
    usuarios_: number;
}