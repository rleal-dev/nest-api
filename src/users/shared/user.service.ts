import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
    users: User[] = [
        {id: 1, name: 'Admin'},
        {id: 2, name: 'User'}
    ]

    getAll() {
        return this.users
    }

    getbyId(id: number) {
        return this.users.find(user => user.id == id)
    }

    create(): void {

    }

    update() {

    }

    delete() {

    }
}
