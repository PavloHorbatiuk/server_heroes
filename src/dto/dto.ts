import {ApiProperty} from '@nestjs/swagger';

export class HeroDto {
    @ApiProperty({example: 'Biden', description: 'name'})
    readonly nickname: string;
    @ApiProperty({example: 'Vasia Pupkin', description: 'Real name'})
    readonly real_name: string;
    @ApiProperty({example: 'some lorem', description: 'just description'})
    readonly origin_description: string;
    @ApiProperty({example: 'superpower', description: 'laser'})
    readonly superpowers: string;
    @ApiProperty({example: 'Give me a beer bro', description: 'cll phrase'})
    readonly catch_phrase: string;
    @ApiProperty({example: 'Picture', description: 'some picture'})
    readonly Images: string;
}
