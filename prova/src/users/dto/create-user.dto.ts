import { IsString, IsEmail, IsNotEmpty, IsUUID, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'João Silva', description: 'O nome completo do usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'joao@email.com', description: 'O email do usuário' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'senha123', description: 'A senha de acesso do usuário' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;

  @ApiProperty({ 
    example: '550e8400-e29b-41d4-a716-446655440000', 
    description: 'O ID do perfil (Profile) associado a este usuário' 
  })
  @IsUUID()
  @IsNotEmpty()
  profileId: string;
}