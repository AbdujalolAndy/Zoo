import { Controller,Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catService:CatService){

    }
    @Get()
    public getHello(){
        return this.catService.getHello()
    }
    @Get("greet")
    public getGreet(){
        return this.catService.greet()
    }
}
