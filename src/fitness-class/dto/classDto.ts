import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";

export class CreateClassDto {
    
    @IsString()
    title: string;

    // @IsDate()
    // classdate: Date;

    // @IsNumber()
    // attendees: number;
    
}

export class UpdateClassDto extends PartialType(CreateClassDto){

}

export class DeleteClassDto extends PartialType(CreateClassDto){

}