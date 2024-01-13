import "dotenv/config";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appPort = process.env.Port || 3000;

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix("api");
  app.enableCors();

  await app.listen(appPort);
}
bootstrap();
