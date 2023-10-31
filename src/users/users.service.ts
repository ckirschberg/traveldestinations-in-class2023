import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

// TODO: 
// 1: user.schema.ts - fullname, email (username), phone, password
// 2: create method, to sign up a user.
// 3: auth.controller.ts will need a signup method. - add validation to the UserSignupDTO
// - using the bcrypt library like we did in the NodeJs application will avoid saving passwords as clear text.
// note: when loggin in we need to use bcrypt as well to validate the password.
// 4: In the user.module.ts add the UserSchema as a Schema. Look into cats.module.ts for an example.
// 5: Change the findOne method in users.service to look in the database instead of the users array (hardcoded)
// -- Look into the CatsService to set up the connection to the database for the UsersService.

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  //
  // create a user

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}