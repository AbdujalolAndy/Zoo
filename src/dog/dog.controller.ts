import { Controller, Get, Param, Query, Post,Body } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {

    }
    @Get()
    public getHello() {
        return this.dogService.getHello()
    }

    @Get("greet/:id")
    public greet(@Param() params: any, @Query() query: any) {
        console.log("Params", params)
        console.log("Queries", query)
        return this.dogService.greet()
    }

    @Post("edit")
    public modify(@Body() body:any):any{
        console.log("body",body);
        return this.dogService.modify()
    }
}
