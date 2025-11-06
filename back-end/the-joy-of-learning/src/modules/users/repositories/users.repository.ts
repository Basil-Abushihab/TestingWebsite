import { Injectable } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { User } from "@prismaClient/prisma/client";
import { CreateUserDto } from "@users/users.schema";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
