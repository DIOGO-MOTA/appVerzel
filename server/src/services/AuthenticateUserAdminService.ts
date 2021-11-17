import { getRepository } from "typeorm";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import UserAdmin from "../models/UserAdmin";

interface Request {
  email: string;
  password: string;
}

interface IResponse {
  userAdmin: UserAdmin;
  tokenAdmin: string;
}

class AuthenticateUserAdminService {
  public async execute({ email, password }: Request): Promise<IResponse> {
    const usersRepository = getRepository(UserAdmin);

    const userAdmin = await usersRepository.findOne({ where: { email } });

    if (!userAdmin) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(
      password,
      userAdmin.password,
    );

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }
    
    const { secret, expiresIn} = authConfig.jwt;

    const tokenAdmin = sign({}, secret, {
        subject: userAdmin.id,
        expiresIn,
    });

    return { userAdmin, tokenAdmin };

  }
}

export default AuthenticateUserAdminService;