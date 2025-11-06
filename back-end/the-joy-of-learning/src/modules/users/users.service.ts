import { Injectable } from "@nestjs/common";
import { User } from "@prismaClient/prisma/browser";
import { UsersRepository } from "@users/repositories/users.repository";
import { CreateUserDto } from "./users.schema";


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }

  async registerUser(data: CreateUserDto): Promise<User> {
    
    return this.usersRepository.create(data);
  }
}
