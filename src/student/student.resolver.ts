import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => [StudentType])
  async getStudents(): Promise<StudentType[]> {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  async getStudent(@Args('id') id: string): Promise<StudentType> {
    return this.studentService.getStudent(id);
  }

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    return this.studentService.createStudent(createStudentInput);
  }
}
