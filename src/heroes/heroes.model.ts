import {ApiProperty} from '@nestjs/swagger';
import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface HeroCreationAttrs {
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string;
}

@Table({tableName: 'heroes'})
export class Hero extends Model<Hero, HeroCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identification'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: 'Brotusik', description: 'nikName'})
    @Column({type: DataType.STRING, unique: true})
    nickname: string;

    @ApiProperty({example: 'Biden', description: 'name'})
    @Column({type: DataType.STRING})
    real_name: string;

    @ApiProperty({example: 'some lorem', description: 'just description'})
    @Column({type: DataType.STRING})
    origin_description: string;

    @ApiProperty({example: 'superpower', description: 'laser'})
    @Column({type: DataType.STRING})
    superpowers: string;

    @ApiProperty({example: 'Give me a beer bro', description: 'cll phrase'})
    @Column({type: DataType.STRING})
    catch_phrase: string;

    @ApiProperty({example: 'Picture', description: 'some picture'})
    @Column({type: DataType.STRING})
    image: string;
}
