import { Module } from "@nestjs/common";
import { PrismaModule } from "../../prisma/prisma.module";
import { UsersRepository } from "@users/repositories/users.repository";
import { UsersService } from "@users/users.service";
import { UsersController } from "@users/users.controller";

@Module({
    imports:[PrismaModule],
    providers:[UsersRepository,UsersService],
    controllers:[UsersController]
})
export class UserModule{}