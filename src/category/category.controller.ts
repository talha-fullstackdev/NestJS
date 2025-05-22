/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){} // injecting CategoryService here likr this  
    @Get()
    getAllCategories(){
      return this.categoryService.getCategory()
   }
}
