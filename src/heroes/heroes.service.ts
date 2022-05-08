import {HeroDto} from '../dto/dto';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Hero} from './heroes.model';
import {FilesService} from 'src/files/files.service';
import {UpdateHeroDto} from "../dto/UpdateHero.dto";


@Injectable()
export class HeroesService {

    constructor(
        @InjectModel(Hero) private heroRepository: typeof Hero,
        private fileService: FilesService
    ) {
    }


    async createHero(dto: HeroDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        return await this.heroRepository.create({...dto, image: fileName});
    }

    async getAllHeroes(): Promise<Hero[]> {
        return await this.heroRepository.findAll({
            limit: 5,
            offset: 0
        });
    }

    async getOne(id: number) {
        return await this.heroRepository.findOne({
            where: {id}
        });
    }


    async updateHero(id: number, dto: HeroDto, image: any): Promise<Hero> {
        const fileName = await this.fileService.createFile(image)
        const hero = await this.heroRepository.findOne({where: {id}});
        return await hero.update({...dto, image: fileName},
            {

                where: {
                    id
                },

            })
    }

    async updateImage(id: number, image: any): Promise<Hero> {
        const fileName = await this.fileService.createFile(image)
        const hero = await this.heroRepository.findOne({where: {id}})
        return await hero.update({image: fileName},
            {where: {id}})
    }

    async deleteHero(id: number,): Promise<void> {
        const hero = await this.heroRepository.findOne({where: {id}})
        return await hero.destroy()
    }
}
