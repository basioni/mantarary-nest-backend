import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    username: string;
    
    @IsEmail()
    email: string;
    
    @IsStrongPassword()
    password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto){

}

export class DeleteUserDto extends PartialType(CreateUserDto){

}