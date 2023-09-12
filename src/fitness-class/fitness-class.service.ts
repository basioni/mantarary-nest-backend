import { Injectable } from '@nestjs/common';
import { fitnessClass } from 'src/entities/fitnessClass.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto, DeleteClassDto, UpdateClassDto } from './dto/classDto';

@Injectable()
export class FitnessClassService {

    constructor(@InjectRepository(fitnessClass) private readonly fitnessClassRep: Repository<fitnessClass>,
    ) {

    }

    
    findUserClasses(userId: string) {
        return "this is user classes";
    }

    async getAllClasses() {
        return await this.fitnessClassRep.find();
    }

    async findClass(id: number) {
        return await this.fitnessClassRep.findOne({ where: { id: id } });
    }

    async findClassWithTitle(title: string) {
        return await this.fitnessClassRep.findOne({ where: { title: title } });
    }

    async createClass(createClassDto: CreateClassDto) {
        const fitClass = await this.fitnessClassRep.create(createClassDto);
        return await this.fitnessClassRep.save(fitClass);
    }

    async updateClass(id: number, updateclassDTO: UpdateClassDto) {
        return await this.fitnessClassRep.update(id, updateclassDTO);
    }

    async deleteClass(id: number, deleteClassDto: DeleteClassDto) {
        return await this.fitnessClassRep.delete(id);
    }

}
