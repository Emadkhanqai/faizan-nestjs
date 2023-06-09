import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(username: string, password: string): Promise<User> {
    return this.userModel.create({
      username,
      password,
    });
  }

  async getUser(query: any): Promise<User> {
    let userName;
    if (query?.username) {
      userName = query?.username;
    }
    if (query?.username?.username) {
      userName = query?.username?.username;
    }
    return this.userModel.findOne({ username: userName });
  }
}
