import { Module } from '@nestjs/common';
import { FitnessClassController } from './fitness-class.controller';
import { fitnessClass } from 'src/entities/fitnessClass.entity';

import { FitnessClassService } from './fitness-class.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([fitnessClass])],
  controllers: [FitnessClassController],
  providers: [UserService , FitnessClassService]
})
export class FitnessClassModule {}
