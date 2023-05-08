import { Injectable } from '@nestjs/common';
import { SecretEntity } from './secret.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSecretDto } from './dto/create-secret.dto';

@Injectable()
export class SecretService {
  constructor(
    @InjectModel(SecretEntity.name)
    private secretEntityModel: Model<SecretEntity>,
  ) {}

  async revealSecret(uuid: string, accessCode: string): Promise<any> {
    const match = await this.secretEntityModel.findOne({
      _id: uuid,
      accessCode,
    });
    if (!match) {
      return null;
    }
    await this.secretEntityModel.findByIdAndRemove(uuid);
    return match;
  }

  async createSecret(secret: CreateSecretDto): Promise<any> {
    const newSecret = new this.secretEntityModel(secret);
    const { _id } = await newSecret.save();
    return { uuid: _id };
  }
}
