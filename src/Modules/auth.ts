import { sign } from 'jsonwebtoken';
import { Usuario } from "../Entities/Usuario";



export const createAccessToken = (usuario: Usuario) => {
    return sign({ idUsuario: usuario.idUsuario }, process.env.ACCESS_TOKEN_SECRET! ,{
        expiresIn: "15m"
    })
}


export const createRefreshToken = (usuario: Usuario) => {
    return sign({ idUsuario: usuario.idUsuario }, process.env.REFRESH_TOKEN_SECRET!,{
        expiresIn: "7d"
    })
}

