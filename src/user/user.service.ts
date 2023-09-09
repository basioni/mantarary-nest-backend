import { Injectable } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRep: Repository<User>,
    ){

    }

    async findUser(id: number){
        return await this.userRep.findOne({where: {id:id}});
    }

    async findUserWithUsername(username: string){
        return await this.userRep.findOne({where: {username:username}});
    }

    async createUser(createUserDto: CreateUserDto){
        const user = await this.userRep.create(createUserDto);
        return await this.userRep.save(user);
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto){
        return await this.userRep.update(id,updateUserDto);
    }
    async deleteUser(id: number, deleteUserDto: DeleteUserDto){
        return await this.userRep.delete(id);
    }
}
