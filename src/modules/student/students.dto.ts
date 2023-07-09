import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Int } from 'type-graphql';

@ObjectType()
@Schema()
export class StudentDto {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  mobile: string;

  @Field(() => ID)
  standard: Types.ObjectId;
}
