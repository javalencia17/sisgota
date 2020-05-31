import { MiddlewareFn } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { IMyContext } from '../interfaces';

export const isAuth: MiddlewareFn<IMyContext> = ({ context }, next) => {
    const authorization = context.req.headers['authorization']

    if (!authorization) {
        throw new Error("No autenticado")
    }

    try {
        const token = authorization.split(" ")[1];
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
        console.log(payload)
        context.payload = payload as any;
    } catch (err) {
        console.log(err)
        throw new Error("No autenticado")
    }

    return next()
}

