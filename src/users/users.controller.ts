import { Controller, Get, Param } from '@nestjs/common';
import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UserService 
    ) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<User> {
        return this.userService.getbyId(id)
    }
}
