import { createRefreshToken, createAccessToken } from './../Modules/auth';
import { isAuth } from '../Modules/Middlewares/isAuth';
import { Usuario } from './../Entities/Usuario';
import { Resolver, Query, Mutation, Arg, ObjectType, Field, Ctx, UseMiddleware } from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { Rol } from '../Entities/Rol';
import { Entidad } from '../Entities/Entidad';
import { IMyContext } from '../Modules/interfaces';

//types
@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;
}


@Resolver()
export class UsuarioResolver {  

    @Query(type => String )
    @UseMiddleware(isAuth)
    bye(@Ctx() { payload }: IMyContext) {
        return `tu id de usaurio es:  ${payload!.idUsuario} `;
    }

    @Query(type => [Usuario])
    async Usuarios() {
        return await Usuario.find()
    }

    @Mutation(type => Boolean)
    async register(
        @Arg('nombreUsuario') nombreUsuario: string,
        @Arg('correo') correo: string,
        @Arg('password') password: string,
        @Arg('roles_idRol') roles_idRol: number,
        @Arg('entidades_idEntidad') entidades_idEntidad: number
    ) {
        const rol = await Rol.findOne({ idRol: roles_idRol })
        const entidad = await Entidad.findOne({ idEntidad: entidades_idEntidad })
        const hashedPassword = await hash(password, 12);

        try {
            await Usuario.insert({
                nombreUsuario,
                correo,
                password: hashedPassword,
                rol,
                entidad
            });
        } catch (error) {
            console.log(error)
            return false;
        }
        return true;
    }

    @Mutation(type => LoginResponse)
    async login(
        @Arg('correo') correo: string,
        @Arg('password') password: string,
        @Ctx() { res, req }: IMyContext
    ): Promise<LoginResponse> {
        const usuario = await Usuario.find({ where: { correo } })

        if (!usuario) {
            throw new Error("Usuario o contraseña incorrecta");
        }

        const valid = await compare(password, usuario[0].password)

        if (!valid) {
            throw new Error("Usuario o contraseña incorrecta");
        }

        //login successful

        res.cookie(
            'jid', createRefreshToken(usuario[0]) 
            ,
            {
                httpOnly: true
            }
        )

        return {
            accessToken: createAccessToken(usuario[0])
        }
    }



}