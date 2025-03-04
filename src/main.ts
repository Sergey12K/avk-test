import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT
  app.setGlobalPrefix('api');
  await app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${port}...`));
}
bootstrap();
