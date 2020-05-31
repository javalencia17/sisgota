import { Rol } from '../Entities/Rol';
import { Resolver, Mutation, Arg, Query } from 'type-graphql';

@Resolver()
export class RolResolver {

    @Query(() => [Rol])
     roles (){
        return  Rol.find()
    }
    @Query(() => [Rol])
    rol(
        @Arg('idRol') idRol: number
    ){
        return  Rol.find({where:{
            idRol
        }})
    }
    @Mutation(() => Boolean)
    async createRol(
        @Arg('nombreRol') nombreRol: string
    ) {
        try {
            await Rol.insert({
                nombreRol
            });

        } catch (error) {
            console.log(error)
            return false;
        }

        return true;
    }
}