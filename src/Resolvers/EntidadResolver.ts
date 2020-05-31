import { Resolver, Mutation, Arg } from 'type-graphql';
import { Entidad } from '../Entities/Entidad';

@Resolver()
export class EntidadResolver {
    @Mutation(() => Boolean)
    async createEntidad(
        @Arg('nombreEntidad') nombreEntidad: string
    ) {

        await Entidad.insert({
            nombreEntidad
        });

        /* try {
            await Usuario.insert({
                nombreUsuario,
                correo,
                password: hashedPassword,
                roles_: roles_idRol,
                entidades_: entidades_idEntidad
            });
        } catch (error) {
            console.log(error)
            return false;
        } */

        return true;
    }
}