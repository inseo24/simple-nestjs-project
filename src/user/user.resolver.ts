import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => String, { nullable: true }) 
  async getUserNameByEmail(@Args('email') email: string): Promise<string> {
    return this.userService.getName(email);
  }

  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<User> {
    const userId = await this.userService.create(name, email);
    return this.userService.getUserById(userId);
  }
}
