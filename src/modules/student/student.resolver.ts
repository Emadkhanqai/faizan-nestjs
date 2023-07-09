import { Resolver, Query,Args,Mutation } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentDto } from './students.dto';
import { CreateStudentInput } from './create-student.dto';
import { Student } from './student.model';

@Resolver()
export class StudentResolver {
  constructor(
    private readonly studentService: StudentService,
  ) {}

  @Query(() => [StudentDto])
  async students() {
    return this.studentService.getAll();
  }

  // @Mutation(()=> Student)
  // async createStudent(@Args('input') input:CreateStudentInput): Promise<Student>{
  //   return this.studentService.create(input);
  // }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
