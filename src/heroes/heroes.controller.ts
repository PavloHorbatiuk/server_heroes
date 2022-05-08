import {HeroDto} from '../dto/dto';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post, Put,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import {HeroesService} from './heroes.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Hero} from './heroes.model';
import {FileInterceptor} from '@nestjs/platform-express';


@ApiTags('Heroes')
@Controller("heroes")
export class HeroesController {
    constructor(private heroesService: HeroesService) {
    }

    @ApiOperation({summary: 'Made new info about hero'})
    @ApiResponse({status: 200, type: Hero})
    @Post('/create')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() heroDto: HeroDto, @UploadedFile() image) {
        return this.heroesService.createHero(heroDto, image);
    }

    @ApiOperation({summary: 'To take all heroes from database'})
    @ApiResponse({status: 200, type: [Hero]})
    @Get('/all')
    getAll() {
        return this.heroesService.getAllHeroes();
    }

    @ApiOperation({summary: 'To take one from base'})
    @ApiResponse({status: 200, type: Hero})
    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.heroesService.getOne(id);
    }

    @ApiOperation({summary: 'To update hero in database'})
    @ApiResponse({status: 200, type: Hero})
    @Put(':id/update')
    @UseInterceptors(FileInterceptor('image'))
    update(@Param('id') id: number, @Body() dto: HeroDto, @UploadedFile() image) {
        return this.heroesService.updateHero(id, dto, image);
    }

    @ApiOperation({summary: 'To update image in database'})
    @ApiResponse({status: 200, type: Hero})
    @Put(':id/update/image')
    @UseInterceptors(FileInterceptor('image'))
    updateImage(@Param('id') id: number, @Body() dto: HeroDto, @UploadedFile() image) {
        return this.heroesService.updateHero(id, dto, image);
    }


    @ApiOperation({summary: 'To remove hero from database'})
    @ApiResponse({status: 200, type: Hero})
    @Delete(':id/delete')
    remove(@Param('id') id: number) {
        return this.heroesService.deleteHero(id);
    }
}
