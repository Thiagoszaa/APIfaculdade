import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: { profile: true, address: true }, 
    });
  }

  async findOne(id: string) { 
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { profile: true, address: true },
    });

    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) { 
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}