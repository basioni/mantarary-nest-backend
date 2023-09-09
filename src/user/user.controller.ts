import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { FitnessClassService } from 'src/fitness-class/fitness-class.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly fitnessClassServices: FitnessClassService){
    }


    //Get All Users
    @UseGuards(JwtGuard)
    @Get('all')
    findAll(){
        return 'all users';
    }

    // Get User
    @UseGuards(JwtGuard)
    @Get(':id')
    findUser(@Param("id") id:number){
        return this.userService.findUser(id);
    }

    // Add New User
    @UseGuards(JwtGuard)
    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto){
        return this.userService.createUser(CreateUserDto);
    }

    //Get User Classes
    @UseGuards(JwtGuard)
    @Get(":id/classes")
    getUserClasses(@Param("id") id:string){
        return this.fitnessClassServices.findUserClasses(id);
    }

    @UseGuards(JwtGuard)
    //Update User
    @Put(":id")
    update(@Param("id") id:number , @Body() updateUserDTO: UpdateUserDto){
        return this.userService.updateUser(id, updateUserDTO)
    }

    @UseGuards(JwtGuard)
    // Delete User
    @Delete(':id')
    deleteUser(@Param("id") id:number, @Body() deleteUserDto: DeleteUserDto){
        return this.userService.deleteUser(id, deleteUserDto);
    }
}
