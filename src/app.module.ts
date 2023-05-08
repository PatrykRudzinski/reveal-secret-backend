import { Module } from '@nestjs/common';
import { SecretModule } from './secret/secret.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://crate-secret-mongo:27017/nest'),
    SecretModule,
    ThrottlerModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
