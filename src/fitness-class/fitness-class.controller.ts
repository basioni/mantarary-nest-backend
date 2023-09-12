import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateClassDto, DeleteClassDto, UpdateClassDto } from './dto/classDto';
import { UserService } from 'src/user/user.service';
import { FitnessClassService } from './fitness-class.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserDto } from 'src/user/dto/createUserDto';

@Controller('fitness-class')
export class FitnessClassController {
    constructor(private readonly userService: UserService, private readonly fitnessClassService: FitnessClassService){
    }


    //Get All Fitness Classes
    @UseGuards(JwtGuard)
    @Get('all')
    findAll(){
        return 'all classes';
    }

    // Get Fitness Class
    @UseGuards(JwtGuard)
    @Get(':id')
    findClass(@Param("id") id:number){
        return this.fitnessClassService.findClass(id);
    }

    // Add New Fitness Class
    @UseGuards(JwtGuard)
    @Post()
    createUser(@Body() createClassDTO: CreateClassDto){
        return this.fitnessClassService.createClass(createClassDTO);
    }

    //Update Fitness Class 
    @UseGuards(JwtGuard)
    @Put(":id")
    update(@Param("id") id:number , @Body() updateClassDto: UpdateClassDto){
        return this.fitnessClassService.updateClass(id, updateClassDto)
    }

    // Delete Fitness Class
    @UseGuards(JwtGuard)
    @Delete(':id')
    deleteUser(@Param("id") id:number, @Body() deleteClassDTO: DeleteClassDto){
        return this.fitnessClassService.deleteClass(id, deleteClassDTO);
    }

    //Get Fitness Class User 
    @UseGuards(JwtGuard)
    @Get(":id/user")
    getClassUser(@Param("id") id:string){
        return this.userService.findUserWithUsername(id);
    }

}
