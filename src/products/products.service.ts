/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class ProductsService {
    private products = [
        {
            id :101,
            name:"Headphone",
            price:"$20"
        },
        {
            id :102,
            name:"mobile",
            price:"$200"
        },
        {
            id :103,
            name:"mouse",
            price:"$10"
        },
        {
            id :104,
            name:"keyboard",
            price:"$40"
        },
        {
            id :105,
            name:"lCD",
            price:"$140"
        },
        {
            id :106,
            name:"laptop",
            price:"$400",
            details:{
                core:"core i5",
                gen :"8th gen",
                spec: "8 GB ram , 256ssd",
                screen : "14 inches"
            }
        }
    ]
    getAllProducts(){
        return this.products
    }
    getProductByID(id:number){
        const product = this.products.find((product) => product.id === id);
        if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
          }
    return product;
  }
}

