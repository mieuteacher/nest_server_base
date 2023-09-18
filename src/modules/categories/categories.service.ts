import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categories: Repository<Category>){}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      let category = await this.categories.save(createCategoryDto);
      return {
        data: category,
        message: "Create ok!"
      }
    }catch{
      throw new HttpException('Lỗi model', HttpStatus.BAD_REQUEST)
    }
  }
  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
