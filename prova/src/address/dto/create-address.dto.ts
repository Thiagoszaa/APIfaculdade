import { IsString, IsNotEmpty, IsInt, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua das Flores', description: 'Nome da rua/avenida' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: 123, description: 'Número do endereço' })
  @IsInt()
  @IsNotEmpty()
  number: number;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'SP', description: 'Estado (Sigla)' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: '01234-567', description: 'CEP do endereço' })
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty({ 
    example: '550e8400-e29b-41d4-a716-446655440000', 
    description: 'O ID do usuário (User) dono deste endereço' 
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}