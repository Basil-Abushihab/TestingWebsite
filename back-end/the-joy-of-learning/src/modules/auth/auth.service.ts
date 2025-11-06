import { Injectable } from "@nestjs/common";
import { UsersService } from "@users/users.service";


@Injectable()
export class AuthService{
    constructor(private readonly userService:UsersService){}

    async signup(username:string,password:string):Promise<any>{
        
    }
}