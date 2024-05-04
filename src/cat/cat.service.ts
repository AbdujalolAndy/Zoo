import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "MEOW"
    }
    public greet():string{
        return "My name is Tom"
    }
}
