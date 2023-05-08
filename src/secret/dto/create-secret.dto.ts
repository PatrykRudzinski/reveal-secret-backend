import {
  IsNotEmpty,
  ArrayNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Secret {
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: string;
}

export class CreateSecretDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  accessCode: string;

  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @ValidateNested()
  @Type(() => Secret)
  secrets: { key: string; value: string }[];
}
