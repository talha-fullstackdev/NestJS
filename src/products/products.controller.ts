/* eslint-disable prettier/prettier */
import { Controller,Get,Param} from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor( private readonly productsService : ProductsService ){}
        @Get() // hit when route is only products
        getProducts(){
           return this .productsService.getAllProducts()
        }
        @Get(":id") // hit  when a dynamic id come after products
        getProductsbyId(@Param("id") id:string){
            return this.productsService.getProductByID(Number(id))
        }
    }