import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async getName(email: string): Promise<string> {
    console.log(`Email: ${email}`);
    const user = await this.userRepository.findOne({ where: { email } });
    console.log(`User: ${JSON.stringify(user)}`);
    return user.name;
  }

  async create(name: string, email: string): Promise<number> {
    console.log(`Name: ${name}, Email: ${email}`);
    const user = new User();
    user.name = name;
    user.email = email;
    return (await this.userRepository.save(user)).id;
  }
}
