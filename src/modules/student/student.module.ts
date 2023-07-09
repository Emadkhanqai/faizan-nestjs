import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';
import { Student, StudentSchema } from './student.model';
import { MongooseModule } from '@nestjs/mongoose';
import { StandardModule } from '../standard/standard.module';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    StandardModule,
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
