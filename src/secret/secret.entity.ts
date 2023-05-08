import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type SecretDocument = HydratedDocument<SecretEntity>;

@Schema()
export class SecretEntity {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuid();
    },
  })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  accessCode: string;

  @Prop({ required: true })
  secrets: { key: string; value: string }[];
}

export const SecretSchema = SchemaFactory.createForClass(SecretEntity);
