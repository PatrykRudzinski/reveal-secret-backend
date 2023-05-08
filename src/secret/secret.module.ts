import { Module } from '@nestjs/common';
import { SecretService } from './secret.service';
import { SecretController } from './secret.controller';
import { SecretEntity, SecretSchema } from './secret.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SecretEntity.name, schema: SecretSchema },
    ]),
  ],
  providers: [SecretService],
  controllers: [SecretController],
})
export class SecretModule {}
