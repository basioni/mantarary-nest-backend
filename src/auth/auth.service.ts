import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService , private jwtService:JwtService) { }

    async validateUser(username: string, password: string) {
        const user = await this.userService.findUserWithUsername(username);
        if (user && bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    
    async login(user:User){
        const payload = {
            username: user.email,
            sub: {
                name: user.username
            }
        }

        return {
            ...user, 
            accessToken: this.jwtService.sign(payload)
        }
    }

}
