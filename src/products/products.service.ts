/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
            id :101,
            name:"Headphone",
            price:"$20"
        },
        {
            id :103,
            name:"mouse",
            price:"$10"
        },
        {
            id :103,
            name:"keyboard",
            price:"$40"
        },
        {
            id :103,
            name:"lCD",
            price:"$140"
        },
        {
            id :103,
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
        return this.products.find((product)=>product.id===id) // find product in products array with help of id
    }
}
