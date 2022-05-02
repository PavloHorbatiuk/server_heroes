import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {NestFactory} from "@nestjs/core";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule,{ cors: true });

    const config = new DocumentBuilder()
        .setTitle('Heroes database')
        .setDescription('Document REST API')
        .setVersion('2.0.0')
        .addTag('Pasha prodaction')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/heroes/docs', app, document);
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
