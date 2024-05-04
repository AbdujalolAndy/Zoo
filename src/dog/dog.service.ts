import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return "WOW-WOW"
    }
    public greet(): string {
        return "My name is Rex"
    }
    public modify(): string {
        return "Successfully modified"
    }
}
