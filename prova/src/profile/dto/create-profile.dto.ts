import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({ example: 'ADMIN', description: 'O nome do perfil de acesso' })
  @IsString()
  @IsNotEmpty()
  name: string;
}   