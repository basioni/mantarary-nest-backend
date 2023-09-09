import { Injectable } from '@nestjs/common';

@Injectable()
export class FitnessClassService {
    findUserClasses(userId: string){
        return "this is user classes";
    }
}
