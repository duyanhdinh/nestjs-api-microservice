import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // cors
  const allows: string[] = process.env.CORS_ORIGIN.split(';');
  const corsOptionsDelegate = function (req, callback) {
    let corsOptions: { origin: boolean; };
    if (allows.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };
  app.enableCors(corsOptionsDelegate);

  // version
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  if (process.env.NODE_ENV !== 'production') {
    // swagger
    const config = new DocumentBuilder()
      .setTitle(process.env.SWAGGER_TYPE)
      .setDescription(process.env.SWAGGER_DESCRIPTION)
      .setVersion(process.env.SWAGGER_VERSION)
      .addBasicAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(process.env.SWAGGER_URI, app, document);
  }

  await app.listen(process.env.HTTP_PORT);
}
bootstrap();
