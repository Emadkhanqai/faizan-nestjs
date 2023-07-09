import { InputType, Field, Int } from 'type-graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateStudentInput {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  mobile: string;

  @Field(() => Types.ObjectId)
  standard: Types.ObjectId;
}
