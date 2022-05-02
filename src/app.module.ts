import {Module} from '@nestjs/common';

import {SequelizeModule} from '@nestjs/sequelize';
import {HeroesModule} from './heroes/heroes.module';
import {ConfigModule} from '@nestjs/config';
import {Hero} from './heroes/heroes.model';
import {FilesModule} from './files/files.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Hero],
            autoLoadModels: true,
        }),
        HeroesModule,
        FilesModule,
    ],
})
export class AppModule {
}
