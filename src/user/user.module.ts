import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { FitnessClassService } from 'src/fitness-class/fitness-class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { fitnessClass } from 'src/entities/fitnessClass.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([fitnessClass])],
  controllers: [UserController],
  providers: [UserService, FitnessClassService]
})
export class UserModule { }
