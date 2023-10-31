import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.schema';
import { TestGuard } from 'src/auth/test.guard';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCats() : Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post()
    @UseGuards(TestGuard)
    addCat(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        
        return this.catsService.create(createCatDto)
    } 

}
