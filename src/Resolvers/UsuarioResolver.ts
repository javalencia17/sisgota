import { Usuario } from './../Entities/Usuario';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { hash } from 'bcryptjs';

@Resolver()
export class UsuarioResolver {
    @Query(() => String)
    hello() {
        return "hi!";
    }

    @Mutation(() => Boolean)
    async register(
        @Arg('correo') correo: string,
        @Arg('password') password: string
    ) {

        const hashedPassword = await hash(password, 12);

        try {
            await Usuario.insert({
                correo,
                password: hashedPassword
            });
        } catch (error) {
            console.log(error)
            return false;
        }   

        return true;
    }
}