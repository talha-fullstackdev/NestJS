/* eslint-disable prettier/prettier */
import { Controller,Get,Param,UseFilters,UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';
@Controller('products')
@UseFilters(HttpExceptionFilter)
export class ProductsController {
    constructor( private readonly productsService : ProductsService ){}
        @Get() // hit when route is only products
        @UseGuards(AuthGuard)
        getProducts(){
           return this .productsService.getAllProducts()
        }
        ////////////////////////////////////////////////
        @Get(":id") // hit  when a dynamic id come after products
        getProductsbyId(@Param("id") id:string){
            return this.productsService.getProductByID(Number(id))
        }
    }