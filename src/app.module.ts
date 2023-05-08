import { Module } from '@nestjs/common';
import { SecretModule } from './secret/secret.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import * as process from 'process';

const dbPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
const dbUser = process.env.MONGO_INITDB_ROOT_USERNAME;
const dbName = 'nest';
const host = 'crate-secret-mongo';
const port = '27017';

const mongoURI = `mongodb://${dbUser}:${dbPassword}@${host}:${port}`;

@Module({
  imports: [
    MongooseModule.forRoot(mongoURI, { dbName }),
    SecretModule,
    ThrottlerModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
