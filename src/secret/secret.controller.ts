import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SecretService } from './secret.service';
import { CreateSecretDto } from './dto/create-secret.dto';
import { RevealSecretDto } from './dto/reveal-secret.dto';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('secret')
export class SecretController {
  constructor(private secretService: SecretService) {}

  @UseGuards(ThrottlerGuard)
  @Throttle(6, 60)
  @Post('reveal/:uuid')
  async revealSecret(
    @Body() revealSecretDto: RevealSecretDto,
    @Param() { uuid }: { uuid: string },
  ) {
    const result = await this.secretService.revealSecret(
      uuid,
      revealSecretDto.accessCode,
    );

    if (!result) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
        },
        HttpStatus.FORBIDDEN,
        { cause: new Error('not found') },
      );
    }

    return result;
  }

  @Post('create')
  createSecret(@Body() createSecretDto: CreateSecretDto) {
    return this.secretService.createSecret(createSecretDto);
  }
}
