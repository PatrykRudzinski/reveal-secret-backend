import { IsNotEmpty } from 'class-validator';

export class RevealSecretDto {
  @IsNotEmpty()
  accessCode: string;
}
